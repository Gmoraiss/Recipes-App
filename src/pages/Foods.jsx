import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/index';
import { fetchCategoryMeal, fetchMeal, fetchSelectCategoryMeals } from '../servicesAPI';

function Foods() {
  const { recipes, foods, setFoods } = useContext(MyContext);
  const [isFilter, setIsFilter] = useState(true);
  const [categorySelect, setCategorySelect] = useState('');
  const [categoryFoods, setCategoryFoods] = useState([]);

  const getFoods = async () => {
    setFoods(await fetchMeal());
    setCategoryFoods(await fetchCategoryMeal());
  };

  useEffect(() => {
    getFoods();
  }, []);

  const selectCategory = async ({ target: { innerText } }) => {
    setCategorySelect(innerText);
    if (innerText === categorySelect) {
      if (isFilter) {
        setFoods(await fetchSelectCategoryMeals(innerText));
      } else setFoods(await fetchMeal());
      setIsFilter(!isFilter);
    } else {
      setFoods(await fetchSelectCategoryMeals(innerText));
      setIsFilter(!isFilter);
    }
  };

  const allCategory = async () => {
    setFoods(await fetchMeal());
    setIsFilter(true);
    setCategorySelect('');
  };

  const render = recipes.length > 0 ? recipes : foods;
  return (
    <div>
      <Header isSearchButton title="Foods" />
      {categoryFoods.length > 0 && categoryFoods.map((category, index) => (
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

      {foods.length > 0 && render.map((value, index) => (
        <Link key={ index } to={ `/foods/${value.idMeal}` }>
          <div data-testid={ `${index}-recipe-card` }>
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

export default Foods;
