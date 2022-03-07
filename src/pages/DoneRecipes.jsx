import React from 'react';
import profileIcon from '../images/profileIcon.svg';

function DoneRecipes() {
  return (
    <div>
      <h2 data-testid="page-title">Done Recipes</h2>
      <button type="button" src={ profileIcon }>
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </button>
    </div>
  );
}

export default DoneRecipes;
