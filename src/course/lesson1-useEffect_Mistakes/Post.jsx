import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Post() {
  const [posts, setPosts] = React.useState([]);
  // when component unmounts, fetch the posts is never cancelled, it is running in the background
  // this may lead to memory leaks 
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios.get("https://jsonplaceholder.typicode.com/posts", { cancelToken: cancelToken.token })
      .then((response) => {
        alert("posts are ready !, updating the state");
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('CANCELLED !');
        }else {
          // handle Error
        }
      })
    return () => {
      cancelToken.cancel();
      console.log("component unmount, cancel the fetch if it is still running");
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
