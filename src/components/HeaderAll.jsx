import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function HeaderAll() {
  return (
    <div>
      <button type="button" src={ profileIcon }>
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </button>
      <h2 data-testid="page-title">Drinks</h2>
      <button type="button" src={ searchIcon }>
        <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
      </button>
    </div>
  );
}

export default HeaderAll;
