import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavWrapper from "./course/lesson3-code-splitting/NavWrapper";
// import Home from "./course/lesson3-code-splitting/Home";
// import About from "./course/lesson3-code-splitting/About";
// import Post from "./course/lesson3-code-splitting/Post";
import { lazy } from "react";
// code splitting / lazy loading : it means loading the code only when it is needed
// this is useful for large components or libraries that are not needed immediately
const About = lazy(() => wait(1000).then(() => import("./course/lesson3-code-splitting/About")));
const Home = lazy(() => wait(1000).then(() => import("./course/lesson3-code-splitting/Home")));
const Post = lazy(() => wait(1000).then(() => import("./course/lesson3-code-splitting/Post")));
function App() {
  return (
    <>
      {/* <Lesson1_0/> */}
      {/* <Lesson1_1/> */}
      {/* <Lesson1_2/> */}
      {/* <Lesson2_0/> */}
      {/* <Lesson2_1 /> */}
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}
// utility function to wait for some time (simulate network delay)
function wait(time) {
  return new Promise((resolve) =>
    setTimeout(resolve, time)
  );
}

export default App;
