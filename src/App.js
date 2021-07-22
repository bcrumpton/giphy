import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState();

  const handleChange = (e) => {
    const { value } = e.target
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=qb8j42lylFDFjJGU5yxhnota06h3liIj&q=${value}&lang=en&limit=25`)
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <div className="App">
      <form method="GET">
        <label htmlFor="search">Giphy Search</label>
        <input onChange={handleChange} type="search" name="search" id="search" placeholder="What would you like to search for?" />
      </form>

      <div className="results">
        {results && results.data.map((item) => {
          console.log(item)
          return (
            <img src={item.images.fixed_width.url} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
