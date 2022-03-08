
import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/index';
import Footer from '../components/Footer';

function Drinks() {
  const { recipes } = useContext(MyContext);

  return (
    <div>

      <Header isSearchButton title="Drinks" />

      {recipes.length > 0 && recipes.map((value, index) => (
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

    <Header isSearchButton title="Drinks" />
    <Footer />

    </div>

  );
}

export default Drinks;
