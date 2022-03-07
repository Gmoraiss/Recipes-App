import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <section>

      <div>
        <button type="button" src={ profileIcon }>
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title">Foods</h2>
        <button type="button" src={ searchIcon }>
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      </div>
      <div>
        <input type="text" placeholder="Search Recipe" />
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
    </section>
  );
}

export default Header;
