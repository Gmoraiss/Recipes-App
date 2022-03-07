import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function Ingredients() {
  const history = useHistory();

  return (
    <div>
      <h2 data-testid="page-title">
        {history.location.pathname
          .split('/')[2] === 'foods' ? 'Explore Ingredients' : 'Explore Ingredients ' }

      </h2>
      <button type="button" src={ profileIcon }>
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </button>

    </div>
  );
}

export default Ingredients;
