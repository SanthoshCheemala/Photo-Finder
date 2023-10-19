import React, { useState } from "react";

function Search(props) {
  const [term, setTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); 
  }

  return (
    <div className="Search">
      <form className="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Image Term..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
        <button className="btn-search" onClick={ props.Sendterm(term)}>Search</button>
      </form>
    </div>
  );
}

export default Search;
