import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = React.useState([]);
  // when component unmounts, fetch the posts is never cancelled, it is running in the background
  // this may lead to memory leaks 
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((response) => response.json())
      .then((data) => {
        alert("posts are ready !, updating the state");
        setPosts(data);
        console.log(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }else {
          // handle Error
        }
      })
    return () => {
      controller.abort();
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
