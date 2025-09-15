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

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "20px", marginTop: "50px"}}>
      <div>
        Search Users: {" "}
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
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