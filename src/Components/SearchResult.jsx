import React from 'react'
import './SearchBar.css';
const SearchResult = ({ result }) => {
  if (!result) {
    return <div>No results found.</div>;
  }

  return (
    <div>
      {result.map((result,id) => {
        // Print each result to the console
        console.log(result);
        return (
          <a href={result.url} key={id} target='_blank'>
            {result.name}
          </a>
          
        );
      })}
    </div>
  );
};

export default SearchResult;