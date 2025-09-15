import { useState, lazy, Suspense } from "react";
// import AdminData from "./AdminData";
// import { sum } from './sum';

// if module dont have default export then we need to wrap it in a function that returns an object with default property
const AdminData = lazy(() =>
  wait(1000).then(() =>
    import("./AdminData").then((module) => ({ default: module.AdminData }))
  )
);
function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          // only load the sum.js module when this button is clicked
          import("./sum").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {/* if user is not admin, you don't want to show admin data, because of this you don't want to load the component AdminData */}
      <Suspense fallback={<h3>Loading Admin Data...</h3>}>
        {isAdmin ? <AdminData /> : "You are not admin"}
      </Suspense>
    </div>
  );
}

export default Home;

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
