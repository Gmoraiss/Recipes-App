import React, { } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function RecipesProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [filterRadio, setFilterRadio] = useState('inputName');

  const store = {
    searchInput,
    setSearchInput,
    filterRadio,
    setFilterRadio,
  };
  return (
    <MyContext.Provider value={ store }>
      {children}
    </MyContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RecipesProvider;
