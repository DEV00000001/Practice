import React from 'react'

function Lesson4_0() {
  const [results, setResults] = React.useState([]);
  const [searchText, SetSearchText] = React.useState("");
  console.log("Render: ", results);


  const handleInputChange = (e) => {
    SetSearchText(e.target.value);
    fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
      .then(res => res.json())
      .then(data => setResults(data.users))
      .catch(err => console.error(err));
  };
  // debounce: it means to limit the rate at which a function can fire.
  // it will wait for the user to stop typing for a certain amount of time before making the API call
  
  const debounce = (callback, delay) => {
    let timeout = null;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    }
  };

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "20px", marginTop: "50px"}}>
      <div>
        Search Users: {" "}
        <input
          type="text"
          value={searchText}
          // this is error , because handleInputChange only runs when user stop typing for 1 second
          // at this time, text in the input box : "" , so API call will be made with empty string
          onChange={debounce(handleInputChange, 1000)}
        />  
      </div>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (  <li key={result.id}>{result.firstName} {result.lastName}</li>))}
        </ul>
      )}
    </div>
  )
}

export default Lesson4_0