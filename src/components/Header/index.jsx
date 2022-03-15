/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import profileIcon from '../../images/profileIcon.svg';
import {
  AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
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
      <nav style={ { width: '100%' } }>
        <ul className="nav-bar">
          <li>
            <button
              className="header-buttons"
              type="button"
              onClick={ () => history.push('/profile') }
            >
              <AiOutlineUser />
            </button>
          </li>
          <li>
            <h1
              data-testid="page-title"
            >
              {title}

            </h1>
          </li>
          <li>
            {isSearchButton
        && (
          <button
            className="header-buttons"
            type="button"
            src={ searchIcon }
            data-testid="search-top-btn"
            onClick={ () => setIsSearchBar(!isSearchBar) }
          >

            <AiOutlineSearch />
          </button>)}
          </li>
        </ul>
      </nav>
      {isSearchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSearchButton: PropTypes.bool.isRequired,
};

export default Header;
