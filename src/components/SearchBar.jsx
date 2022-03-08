import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <div>

        <input type="text" placeholder="Search Recipe" data-testid="search-input" />
        <label htmlFor="ingredient">
          ingredient
          <input type="radio" id="ingredient" />
        </label>

        <label htmlFor="name">
          Name
          <input type="radio" id="name" />
        </label>

        <label htmlFor="firstLetter">
          first Letter
          <input type="radio" id="firstLetter" />
        </label>

        <button type="button">Search</button>
      </div>
    </div>
  );
}
