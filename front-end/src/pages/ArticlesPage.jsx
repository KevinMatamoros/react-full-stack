/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useParams, useLoaderData, Link } from "react-router-dom";
import articles from "../articles-content";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";

import { useState } from "react";
import useUser from "../useUser";

export default function ArticlePage() {
  const { name } = useParams();
  const { upVotes: initialUpVotes, comments: initialComments } =
    useLoaderData();
  const [upVotes, setUpVotes] = useState(initialUpVotes);
  const [comments, setComments] = useState(initialComments);

  const { isLoading, user } = useUser();

  async function onUpvoteClick() {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const response = await axios.post(
      "/api/articles/" + name + "/upvote",
      null,
      { headers }
    );
    const updateArticleData = response.data;
    setUpVotes(updateArticleData.upVotes);
    setComments(updateArticleData.comments);
  }

  async function onAddComment({ name: postedBy, comment: text }) {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const response = await axios.post(
      "/api/articles/" + name + "/comments",
      {
        postedBy,
        text,
        date: new Date(),
      },
      { headers }
    );
    const addNewCommentData = response.data;
    setUpVotes(addNewCommentData.upVotes);
    setComments(addNewCommentData.comments);
  }

  const article = articles.find((article) => article.name === name);
  return (
    <>
      <h1>{article.title}</h1>
      {user && <button onClick={onUpvoteClick}>Upvote</button>}
      <p>
        This article has <b style={{ color: "green" }}>{upVotes}</b> upvotes!
      </p>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {user ? (
        <AddCommentForm onAddComment={onAddComment} />
      ) : (
        <Link>Log In to can add a comment</Link>
      )}
      <CommentsList comments={comments} />
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get("/api/articles/" + params.name);
  const { upVotes, comments } = response.data;
  return { upVotes, comments };
}
