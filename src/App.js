import { useState } from 'react';
import './App.css';

function App() {
  // Initialize state for search term & results of fetch
  const [query, setQuery] = useState('')
  const [results, setResults] = useState();

  // On change of search input, throw value in state
  const handleChange = (e) => {
    const { value } = e.target
    
    setQuery(value);
  }

  // On click of submit button, call Giphy API with search term
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=qb8j42lylFDFjJGU5yxhnota06h3liIj&q=${query}&lang=en&limit=25`)
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }

  return (
    <div className="App">
      <form method="GET">
        <label htmlFor="search">Giphy Search</label>
        <div className="field">
          <input onChange={handleChange} type="search" name="search" id="search" placeholder="Pizza..." />
        </div>
        <div className="field">
          <input type="submit" onClick={handleSubmit} value="Search" />
        </div>
      </form>

      <div className="results">
        {results && results.data.map((item) => {
          console.log(item)
          return (
            <img src={item.images.fixed_width.url} alt={item.title} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
