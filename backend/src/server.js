import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import admin from "firebase-admin";
import fs from "fs";

const credentials = JSON.parse(fs.readFileSync("./credentials.json"));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

let db;

async function connectToDB() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  db = client.db("full-stack-react-db");
}

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });

  if (!article) {
    res.status(404).json({ message: "Article not found" });
  } else {
    res.json(article);
  }
});

app.use(async function (req, res, next) {
  const { authtoken } = req.headers;

  if (authtoken) {
    const user = await admin.auth().verifyIdToken(authtoken);
    req.user = user;
    next();
  } else {
    res.sendStatus(400);
  }
});

app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection("articles").findOne({ name });

  const upVotesIds = article.upVotesIds || [];
  const canUpVote = uid && !upVotesIds.includes(uid);

  if (canUpVote) {
    const updatedArticle = await db.collection("articles").findOneAndUpdate(
      { name },
      {
        $inc: { upVotes: 1 },
        $push: { upVotesIds: uid },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(updatedArticle);
  } else {
    res.sendStatus(403);
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text, date } = req.body;
  const newComment = { postedBy, text, date };

  const updatedArticle = await db.collection("articles").findOneAndUpdate(
    { name },
    { $push: { comments: newComment } },
    {
      returnDocument: "after",
    }
  );

  res.json(updatedArticle);
});

async function start() {
  connectToDB();
  app.listen(8000, function () {
    console.log("Server is listening on port 8000");
  });
}

start();
