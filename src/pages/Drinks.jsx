import React from 'react';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';

function Drinks() {
  return (
    <div>
      <Header title="Drinks">
        <button type="button" src={ profileIcon }>
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
      </Header>
    </div>

  );
}

export default Drinks;
