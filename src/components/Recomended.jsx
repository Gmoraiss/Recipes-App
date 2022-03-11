import PropTypes from 'prop-types';
import React from 'react';

function Recomended({ index, recipe, typeDrink }) {
  return (
    <div
      key={ index }
      className="recomended-card"
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ typeDrink ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt="recipe pic"
      />
      <h3
        data-testid={ `${index}-recomendation-title` }
      >
        {typeDrink ? recipe.strMeal : recipe.strDrink}

      </h3>

    </div>
  );
}

Recomended.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  typeDrink: PropTypes.bool.isRequired,
};

export default Recomended;
