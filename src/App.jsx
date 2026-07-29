import { useState } from "react";
import "./App.css";

function Movie(props) {

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </div> 
  );
}

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Movie Search</h1>

      <input
      type="text"
      placeholder="Search Movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      <button>Search</button>

      <Movie title="Batman" year={2008} />
      <Movie title="Avengers" year={2012} />
      <Movie title="Iron Man" year={2008} />
     </div>
  );
}

export default App;