import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchByIngredient, fetchByName, fetchFirstLetter } from '../servicesAPI';

export default function SearchBar() {
  const [filterRadio, setFilterRadio] = useState('inputName');
  const [searchInput, setSearchInput] = useState('');

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
      const URL = page === 'foods' ? (`./foods/${data.meals[0].idMeal}`) : (
        `./drinks/${data.drinks[0].idDrink}`);
      if (data[type].length === 1) {
        history.push(URL);
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
          onChange={ ({ target }) => { setSearchInput(target.value); } }
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
