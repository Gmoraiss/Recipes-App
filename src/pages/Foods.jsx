import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Foods(props) {
  const { history } = props;
  return (
    <div>
      <div>
        <button
          type="button"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title">Foods</h2>
        <button
          type="button"
          src={ searchIcon }
        >
          <img
            src={ searchIcon }
            alt="searchIcon"
            data-testid="search-top-btn"
          />
        </button>
      </div>
      <SearchBar />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Foods;
