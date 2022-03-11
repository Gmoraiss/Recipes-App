import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/index';
import { fetchByIngredient } from '../servicesAPI';

function Ingredients() {
  const { recipes, ingredients, setIngredients } = useContext(MyContext);

  const getIngredients = async () => {
    setIngredients(await fetchByIngredient());
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const render = recipes.length > 0 ? recipes : ingredients;

  return (
    <div>
      <Header
        title="Explore Ingredients"
      />

      {ingredients.length > 0 && render.map((value, index) => (
        <Link key={ index } to={ `/explore/foods/ingredients${value.idMeal}` }>
          <div data-testid={ `${index}-ingredient-card` }>
            <img
              src={ value.strMealThumb }
              style={ { width: '300px' } }
              alt="strMealThumb"
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{value.strMeal}</h2>
          </div>
        </Link>
      ))}

      <Footer />

    </div>
  );
}

export default Ingredients;
