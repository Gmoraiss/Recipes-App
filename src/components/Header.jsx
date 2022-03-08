import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, isSearchButton }) {
  const history = useHistory();
  return (
    <section>
      <div>
        <button
          type="button"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title">{title}</h2>
        {isSearchButton
        && (
          <button
            type="button"
            src={ searchIcon }
            data-testid="search-input"
            // onClick={}
          >

            <img
              src={ searchIcon }
              alt="searchIcon"
              data-testid="search-top-btn"
            />
          </button>)}
      </div>
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSearchButton: PropTypes.bool.isRequired,
};

export default Header;
