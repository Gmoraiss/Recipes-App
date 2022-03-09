import React from 'react';
import { BsShare } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import PropTypes from 'prop-types';

function RecipeInfo({ recipeInfo: {
  typeDrink, details, ingredients, pathname, measures }, page }) {
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

      {page === 'details'
        ? (ingredients.map((ingredient, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ ingredient[0] }
          >
            {ingredient[1]}
            {''}
            {measures[index][1]}

          </p>
        )))
        : (
          <div>
            {ingredients.map((ingredient, index) => (
              <label
                htmlFor="input"
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ ingredient[0] }
              >
                <input id="input" data-testid="ingredient-step" type="checkbox" />
                {ingredient[1]}
                {''}
                {measures[index][1]}

              </label>
            ))}
            <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
          </div>
        )}

      <h5 data-testid="instructions">{details.strInstructions}</h5>
    </div>
  );
}

RecipeInfo.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.string.isRequired,
};
export default RecipeInfo;
