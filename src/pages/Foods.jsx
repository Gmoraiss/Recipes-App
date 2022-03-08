import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/index';

function Foods() {
  const { recipes } = useContext(MyContext);

  return (
    <div>
      <Header isSearchButton title="Foods" />

      {recipes.length > 0 && recipes.map((value, index) => (
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
