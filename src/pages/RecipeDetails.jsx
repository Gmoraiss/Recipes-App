/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { fetchDrinkDetails, fetchDrinks, fetchMeal, fetchMealDetails, filterIngredients,
} from '../servicesAPI';
import RecipeInfo from '../components/RecipeInfo';
import MyContext from '../context';
import VideoCard from '../components/VideoCard';
import Recomended from '../components/Recomended';

function RecipeDetails() {
  const { details,
    setDetails,
    ingredients,
    setIngredients,
    measures,
    setMeasures,
    recomended,
    setRecomended } = useContext(MyContext);

  const { location: { pathname }, push } = useHistory();
  const typeDrink = pathname.split('/')[1] === 'drinks';
  const type = typeDrink ? 'cocktails' : 'meals';
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

  const redirectProgress = () => {
    push(`/${pathname.split('/')[1]}/${
      pathname.split('/')[2]}/in-progress`);
  };
  const id = pathname.split('/')[2];

  const addRecipe = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const storage = localStorage.getItem('inProgressRecipes') !== null ? local : [];
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ ...local, [type]: { ...storage[type], [id]: [] } }));
  };

  const handleClick = () => {
    addRecipe();
    redirectProgress();
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
    id,
  };
  const page = pathname;
  return (
    page.includes('in-progress')
      ? (
        <RecipeInfo recipeInfo={ recipeInfo } page="in-progress" />
      ) : (
        <div style={ { overflow: 'hidden' } }>
          <RecipeInfo recipeInfo={ recipeInfo } page="details" />
          {!typeDrink && (
            <VideoCard details={ details } />
          )}
          <h3>Recomendado</h3>
          <div className="recomended-container">

            {recomended.map((recipe, index) => (
              <Recomended
                key={ index }
                recipe={ recipe }
                index={ index }
                typeDrink={ typeDrink }
              />

            ))}
          </div>
          <button
            style={ { position: 'fixed', bottom: '0' } }
            type="button"
            data-testid="start-recipe-btn"
            onClick={ handleClick }
          >
            Iniciar Receita
          </button>
        </div>)
  );
}

export default RecipeDetails;
