import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/index';
import { fetchMeal } from '../servicesAPI';

function Foods() {
  const { recipes } = useContext(MyContext);
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    setFoods(await fetchMeal());
  };

  useEffect(() => {
    getFoods();
  }, []);

  const render = recipes.length > 0 ? recipes : foods;
  return (
    <div>
      <Header isSearchButton title="Foods" />

      {foods.length > 0 && render.map((value, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            src={ value.strMealThumb }
            style={ { width: '300px' } }
            alt="strMealThumb"
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-card-name` }>{value.strMeal}</h2>
        </div>
      ))}

      <Footer />

    </div>
  );
}

export default Foods;
