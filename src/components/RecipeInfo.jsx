import React from 'react';
import { BsShare } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import PropTypes from 'prop-types';

function RecipeInfo({ recipeInfo: {
  typeDrink, details, ingredients, pathname, measures } }) {
  return (
    <div>
      <img
        src={
          pathname.split('/')[1] === 'drinks'
            ? details.strDrinkThumb
            : details.strMealThumb
        }
        data-testid="recipe-photo"
        alt=""
      />
      <h1
        data-testid="recipe-title"
      >
        { typeDrink ? details.strDrink : details.strMeal}

      </h1>
      <button
        data-testid="share-btn"
        type="button"
      >
        <BsShare />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <MdOutlineFavoriteBorder />
      </button>
      <h5
        data-testid="recipe-category"
      >
        {typeDrink ? details.strAlcoholic : details.strCategory}

      </h5>
      <h5>Ingredients:</h5>
      {
        ingredients.map((ingredient, index) => (
          <div key={ index }>
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ ingredient[0] }
            >
              {ingredient[1]}
              {''}
              {measures[index][1]}
            </p>
          </div>
        ))
      }

      <h5 data-testid="instructions">{details.strInstructions}</h5>
    </div>
  );
}

RecipeInfo.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default RecipeInfo;
