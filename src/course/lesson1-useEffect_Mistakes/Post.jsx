import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = React.useState([]);
  // when component unmounts, fetch the posts is never cancelled, it is running in the background
  // this may lead to memory leaks 
  useEffect(() => {
    // if the component is unmounted, we set this flag to true, so we don't update the state, and rerender the component
    let isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if (isCancelled) return;
        alert("posts are ready !, updating the state");
        setPosts(data);
        console.log(data);
      });
    return () => {
      isCancelled = true;
    };
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
