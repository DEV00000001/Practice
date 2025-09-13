import { Route, Routes } from "react-router-dom";
import "./App.css";
import Lesson1_0 from "./course/lesson1-useEffect_Mistakes";
import Home from "./course/lesson1-useEffect_Mistakes/Home";
import Lesson1_1 from "./course/lesson1-useEffect_Mistakes/index2";
import Lesson1_2 from "./course/lesson1-useEffect_Mistakes/index3";
import Post from "./course/lesson1-useEffect_Mistakes/Post";
import Lesson2_0 from "./course/lesson2-objectDate";
function App() {
  return (
    <>
      {/* <Lesson1_0/> */}
      {/* <Lesson1_1/> */}
      {/* <Lesson1_2/> */}
      <Lesson2_0/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
