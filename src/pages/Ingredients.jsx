import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/index';

function Ingredients() {
  const { recipes, foods } = useContext(MyContext);
  const render = recipes.length > 0 ? recipes : foods;

  useEffect(() => {
    // console.log(render);
  }, []);

  return (
    <div>
      <Header
        title="Explore Ingredients"
      />

      {foods.length > 0 && render.map((value, index) => (
        <Link key={ index } to={ `/foods/${value.idMeal}` }>
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
