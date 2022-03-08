import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchByIngredient, fetchByName, fetchFirstLetter } from '../servicesAPI';
import MyContext from '../context';

export default function SearchBar() {
  const { filterRadio,
    searchInput, setFilterRadio,
    setSearchInput, setRecipes } = useContext(MyContext);
  const TWELVE = 12;
  const history = useHistory();
  const { location } = history;
  const page = location.pathname.split('/')[1];
  const type = page === 'foods' ? 'meals' : 'drinks';

  const filters = {
    inputIngredient: fetchByIngredient,
    inputName: fetchByName,
    inputLetter: fetchFirstLetter,
  };

  const handleClick = async (filter, text) => {
    if (searchInput.length > 1 && filterRadio === 'inputLetter') {
      global.alert('Your search must have only 1 (one) character');
    } else {
      filters[filter](text, page);
      const data = await filters[filterRadio](searchInput, page);
      if (data[type] === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (data[type].length === 1) {
        const URL = page === 'foods' ? (`./foods/${data.meals[0].idMeal}`) : (
          `./drinks/${data.drinks[0].idDrink}`);
        history.push(URL);
      } else {
        setRecipes(data[type].slice(0, TWELVE));
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Recipe"
          data-testid="search-input"
          value={ searchInput }
          onChange={ ({ target }) => {
            setSearchInput(target.value);
          } }
        />

        <label htmlFor="ingredient">
          ingredient
          <input
            name="filter"
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            value="inputIngredient"
            onChange={ ({ target }) => { setFilterRadio(target.value); } }
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            name="filter"
            type="radio"
            id="name"
            data-testid="name-search-radio"
            value="inputName"
            onChange={ ({ target }) => { setFilterRadio(target.value); } }
          />
        </label>

        <label htmlFor="firstLetter">
          first Letter
          <input
            name="filter"
            type="radio"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            value="inputLetter"
            onChange={ ({ target }) => { setFilterRadio(target.value); } }
          />
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => {
            handleClick(filterRadio, searchInput);
          } }
        >
          Search

        </button>

      </div>
    </div>
  );
}
