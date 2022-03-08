import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  fetchCategoryDrinks, fetchDrinks, fetchSelectCategoryDrinks } from '../servicesAPI';
import MyContext from '../context/index';

function Drinks() {
  const { recipes } = useContext(MyContext);
  const [drinks, setDrinks] = useState([]);
  const [categoryDrinks, setCategoryDrinks] = useState([]);
  const [isFilter, setIsFilter] = useState(true);
  const [categorySelect, setCategorySelect] = useState('');

  const getDrinks = async () => {
    setDrinks(await fetchDrinks());
    setCategoryDrinks(await fetchCategoryDrinks());
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const selectCategory = async ({ target: { innerText } }) => {
    setCategorySelect(innerText);
    if (innerText === categorySelect) {
      if (isFilter) {
        setDrinks(await fetchSelectCategoryDrinks(innerText));
      } else setDrinks(await fetchDrinks());
      setIsFilter(!isFilter);
    } else {
      setDrinks(await fetchSelectCategoryDrinks(innerText));
      setIsFilter(!isFilter);
    }
  };

  const allCategory = async () => {
    setDrinks(await fetchDrinks());
    setIsFilter(true);
    setCategorySelect('');
  };

  const render = recipes.length > 0 ? recipes : drinks;
  return (
    <div>

      <Header isSearchButton title="Drinks" />
      {categoryDrinks.length > 0 && categoryDrinks.map((category, index) => (
        <div key={ index }>
          <button
            type="button"
            onClick={ selectCategory }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        </div>
      )) }
      <button
        data-testid="All-category-filter"
        onClick={ allCategory }
        type="button"
      >
        All Categories

      </button>
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
