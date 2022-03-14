import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';
import './header.css';

function Header({ title, isSearchButton }) {
  const history = useHistory();
  const [isSearchBar, setIsSearchBar] = useState(false);
  return (
    <header
      className="header"
    >
      <button
        className="header-buttons"
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
            className="header-buttons"
            type="button"
            src={ searchIcon }
            data-testid="search-top-btn"
            onClick={ () => setIsSearchBar(!isSearchBar) }
          >

            <img
              src={ searchIcon }
              alt="searchIcon"
            />
          </button>)}
      {isSearchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSearchButton: PropTypes.bool.isRequired,
};

export default Header;
