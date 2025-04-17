/* eslint-disable react/jsx-key */
import articles from "../articles-content";
import ArticleList from "../ArticlesList";

export default function ArticleListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </>
  );
}
