import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        alert("posts are ready !, updating the state");
        setPosts(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Link to="/"> Go to Home </Link>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Post;
