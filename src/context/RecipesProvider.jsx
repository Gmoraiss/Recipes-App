import React, { } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function RecipesProvider({ children }) {
  const store = {

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
