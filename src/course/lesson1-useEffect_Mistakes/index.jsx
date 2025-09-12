import React, { useEffect, useMemo, useState } from "react";

function Lesson1() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });
  // this effect runs only when 'state' changes
  // state is an object, object is reference type (not primitive type)
  // because of that, when we spread 'state' into a new object, it's a new reference
  // this means that the effect will run every time we update 'state'
  // even if the actual values inside 'state' didn't change

  // useMemo to memoize the user object
  // This way, 'user' will only change if 'state.name' or 'state.selected' change
  // name and selected are primitive types, so React can easily compare them
  const user = useMemo(() => {
    return {
      name: state.name,
      selected: state.selected,
    }
  }, [state.name, state.selected]);


  useEffect(() => {
    console.log("State changed:", state);
  }, [user]);
  // React compares each value in the dependency array 
  // and if any of them have changed (using Object.is comparison),
  // it will re-run the effect.
  // state is an object, object prev and next are different references, although their contents may be the same

  const handleName = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelected = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleName}>Add name</button>
      </div>
      <div>
        <button onClick={handleSelected}>Select</button>
      </div>
      <div>{`{
          name: "${state.name}", 
          selected: ${state.selected.toString()}
        }`}</div>
    </>
  );
}

export default Lesson1;
