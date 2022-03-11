/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProgressInpunt from './ProgressInpunt';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import { copyUrl, setDoneRecipes, setFavorite } from '../servicesAPI';

function RecipeInfo({ recipeInfo: {
  typeDrink, details, ingredients, pathname, measures }, page }) {
  const [isEnableBtn, setIsEnableBtn] = useState();
  const [isShowCopied, setShowCopied] = useState(false);

  const id = pathname.split('/')[2];
  const storage1 = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const validStorage = storage1 !== null
  && storage1.some((favorite) => favorite.id === id);
  const [isFavorite, setIsFavorite] = useState(validStorage);

  const history = useHistory();
  const enableBtn = () => {
    const checkbox = document.querySelectorAll('input');
    const myArray = [...checkbox];
    setIsEnableBtn(myArray.every((input) => input.checked));
  };

  useEffect(() => {
    enableBtn();
    console.log(validStorage);
  }, []);

  const handleCopy = () => {
    copy(copyUrl(typeDrink, pathname));
    setShowCopied(true);
  };

  const handleClick = () => {
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    localStorage.setItem('doneRecipes', JSON
      .stringify([...storage, setDoneRecipes(details, typeDrink)]));
    setIsEnableBtn(!isEnableBtn);
    history.push('/done-recipes');
  };

  const addFavoriteStorage = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...storage, setFavorite(details, typeDrink)]));
    setIsFavorite(!isFavorite);
  };

  const removeFavoriteStorage = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...storage.filter((item) => item.id
        !== setFavorite(details, typeDrink).id)]));
    setIsFavorite(!isFavorite);
  };

  const handleClickFavorite = () => {
    if (!isFavorite) {
      addFavoriteStorage();
    } else {
      removeFavoriteStorage();
    }
  };

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
        onClick={ handleCopy }
      >
        <BsShare />
      </button>
      {isShowCopied && <p>Link copied!</p>}
      <button
        type="button"
        onClick={ handleClickFavorite }
      >
        <img
          src={ isFavorite
            ? blackHeartIcon : whiteHeartIcon }
          alt=""
          data-testid="favorite-btn"
        />
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
            {ingredients.filter((ingr) => ingr[1] !== null && ingr[1] !== '')
              .map((ingredient, index) => (
                <ProgressInpunt
                  enableBtn={ enableBtn }
                  key={ index }
                  ingredient={ ingredient }
                  measures={ measures }
                  index={ index }
                  id={ pathname.split('/')[2] }
                  pathname={ pathname.split('/')[1] }
                />
              ))}
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ !isEnableBtn }
              onClick={ handleClick }
            >
              Finish Recipe

            </button>
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
