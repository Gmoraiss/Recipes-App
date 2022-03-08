/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  fetchDrinkDetails,
  fetchDrinks,
  fetchMeal,
  fetchMealDetails,
} from '../servicesAPI';
import RecipeInfo from '../components/RecipeInfo';

const filterIngredients = (array, param) => Object
  .entries(array).filter((ingredients) => ingredients[0]
    .includes(param) && ingredients[1] !== null);

function RecipeDetails() {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomended, setRecomended] = useState([]);

  const {
    location: { pathname },
    push,
  } = useHistory();

  const typeDrink = pathname.split('/')[1] === 'drinks';

  const getDetails = async (id) => {
    const data = typeDrink
      ? await fetchDrinkDetails(id)
      : await fetchMealDetails(id);

    setDetails(data[0]);
  };

  const getRecomended = async (qtd) => {
    const data = pathname.split('/')[1] === 'drinks'
      ? await fetchMeal(qtd)
      : await fetchDrinks(qtd);
    setRecomended(data);
  };

  useEffect(() => {
    const SIX = 6;
    getDetails(pathname.split('/')[2]);
    getRecomended(SIX);
  }, []);

  useEffect(() => {
    setIngredients(filterIngredients(details, 'strIngredient'));
    setMeasures(filterIngredients(details, 'strMeasure'));
  }, [details]);

  const recipeInfo = {
    details,
    typeDrink,
    ingredients,
    pathname,
    measures,
  };
  return (
    <div style={ { overflow: 'hidden' } }>
      <RecipeInfo recipeInfo={ recipeInfo } />
      {console.log(details)}
      {!typeDrink && (
        <iframe
          data-testid="video"
          className="video"
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope;
          picture-in-picture"
          title="YouTube video player"
          width="640"
          height="360"
          src={ details.strYoutube }
          id="widget2"
        />
      )}
      <h3>Recomendado</h3>
      <div className="recomended-container">

        {recomended.map((recipe, index) => (
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
        ))}
      </div>
      <button
        style={ { position: 'fixed', bottom: '0' } }
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => push(`/foods/${pathname.split('/')[2]}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}
//
export default RecipeDetails;
