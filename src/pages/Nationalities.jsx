/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import MyContext from '../context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FecthAllNationalities, FilterByNationalities } from '../servicesAPI';

function Nationalities() {
  const location = useLocation();
  const page = location.pathname.split('/')[3];
  const type = page === 'foods' && 'meals';
  // const { setRecipes } = useContext(MyContext);
  const [allNationalities, setAllNationalities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState('American');
  const [cardsNationalities, setcardsNationalities] = useState([]);

  const getAllNationalities = async () => {
    const data = await FecthAllNationalities(page, type);
    setAllNationalities(data);
  };

  const getCardsNationalities = async () => {
    const data = await FilterByNationalities(selectedNationality);
    setcardsNationalities(data);
  };

  useEffect(() => {
    getAllNationalities();
    getCardsNationalities();
    console.log(cardsNationalities);
  }, [selectedNationality]);

  // const handleClick = async (nationalities) => {
  //   const TWELVE = 12;
  //   const newRecipes = await FecthAllNationalities(nationalities, page);
  //   setRecipes(newRecipes[type].slice(0, TWELVE));
  // };

  return (
    <div>
      <Header title="Explore Nationalities" isSearchButton />

      <div>
        <select
          data-testid="explore-by-nationality-dropdown"
          value={ selectedNationality }
          onChange={ (e) => { setSelectedNationality(e.target.value); } }
        >
          {allNationalities.map((nationalities, index) => (
            <option
              key={ index }
              data-testid={ `${nationalities.strArea}-option` }
            >
              {nationalities.strArea}
            </option>
          ))}
        </select>
        { cardsNationalities !== null
          ? (cardsNationalities.map((card) => (
            <div key={ card.idMeal }>
              <h1>{card.strMeal}</h1>
              <img style={ { width: '300px' } } src={ card.strMealThumb } alt="card" />
            </div>
          ))) : ''}
      </div>

      <Footer />
    </div>
  );
}

export default Nationalities;
