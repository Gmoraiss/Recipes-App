import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../context/index';
import Footer from '../components/Footer';
import { fetchDrinks } from '../servicesAPI';

function Drinks() {
  const { recipes } = useContext(MyContext);
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    setDrinks(await fetchDrinks());
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const render = recipes.length > 0 ? recipes : drinks;
  return (
    <div>

      <Header isSearchButton title="Drinks" />

      {drinks.length > 0 && render.map((value, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            src={ value.strDrinkThumb }
            style={ { width: '300px' } }
            alt="strMealThumb"
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-card-name` }>{value.strDrink}</h2>
        </div>
      ))}

      <Footer />

    </div>

  );
}

export default Drinks;
