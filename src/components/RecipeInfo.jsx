/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProgressInpunt from './ProgressInpunt';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { copyUrl } from '../servicesAPI';

function RecipeInfo({ recipeInfo: {
  typeDrink, details, ingredients, pathname, measures }, page }) {
  const [isEnableBtn, setIsEnableBtn] = useState();
  const [isShowCopied, setShowCopied] = useState(false);
  const history = useHistory();
  const id = pathname.split('/')[2];
  const enableBtn = () => {
    const checkbox = document.querySelectorAll('input');
    const myArray = [...checkbox];
    setIsEnableBtn(myArray.every((input) => input.checked));
  };

  useEffect(() => {
    enableBtn();
    console.log(details);
    console.log(new Date().toISOString());
  }, []);

  const doneRecipe = {
    id: details[typeDrink ? 'idDrink' : 'idMeal'],
    type: typeDrink ? 'drink' : 'food',
    nationality: details.strArea || '',
    category: details.strCategory || '',
    alcoholicOrNot: details.strAlcoholic || '',
    name: details.strDrink || details.strMeal,
    image: details.strDrinkThumb || details.strMealThumb,
    doneDate: new Date().toISOString(),
    tags: details.strTags || '',

  };

  const handleCopy = () => {
    copy(copyUrl(typeDrink, pathname));
    setShowCopied(true);
  };

  const handleClick = () => {
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    console.log(storage);
    localStorage.setItem('doneRecipes', JSON
      .stringify({ ...storage, [id]: doneRecipe }));
    setIsEnableBtn(!isEnableBtn);
    history.push('/done-recipes');
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
        data-testid="favorite-btn"
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="" />
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
