import React from "react";

function Lesson4_0() {
  const [results, setResults] = React.useState([]);
  const [searchText, SetSearchText] = React.useState("");

  // debounce: it means to limit the rate at which a function can fire.
  // it will wait for the user to stop typing for a certain amount of time before making the API call
  const debounce = (callback, delay) => {
    let timeout = null;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  // throttle: it means to limit the rate at which a function can fire.
  // it will make the API call at most once every certain amount of time (vd: 1 second, call api at most once every 1 second)
  const throttle = (callback, delay) => {
    let shouldWait = false;
    let waitingArgs = null;

    const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false; // 
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay); 
    }
  };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
      callback(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  };
  // this is 2nd error : every time user types, a new debounced function is created
  // so the timeout is never cleared , beacase of this , if i type "abc" quickly
  // 3 API calls will be made after 1 second with "a", "ab", "abc"
  // this don't work as expected
  // const requestApi = debounce((e) => {
  //   fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
  //     .then(res => res.json())
  //     .then(data => setResults(data.users))
  //     .catch(err => console.error(err));
  // }, 1000);

  // fix: useMemo to memoize the debounced function
  const requestApi = React.useMemo(() => {
    return debounce((e) => {
      fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setResults(data.users))
        .catch((err) => console.error(err));
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    SetSearchText(e.target.value);
    requestApi(e);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <div>
        Search Users:{" "}
        <input
          type="text"
          value={searchText}
          // this is error , because handleInputChange only runs when user stop typing for 1 second
          // at this time, text in the input box : "" , so API call will be made with empty string
          // onChange={debounce(handleInputChange, 1000)}
          onChange={handleInputChange}
        />
      </div>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              {result.firstName} {result.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lesson4_0;
