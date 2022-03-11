import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import MyContext from '../context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FecthAllNationalities } from '../servicesAPI';

function Nationalities() {
  const location = useLocation();
  const page = location.pathname.split('/')[3];
  const type = page === 'foods' && 'meals';
  // const { setRecipes } = useContext(MyContext);
  const [allNationalities, setAllNationalities] = useState([]);

  const getAllNationalities = async () => {
    const data = await FecthAllNationalities(page, type);
    setAllNationalities(data);
  };

  useEffect(() => {
    getAllNationalities();
    console.log(allNationalities);
  }, []);

  // const handleClick = async (nationalities) => {
  //   const TWELVE = 12;
  //   const newRecipes = await FecthAllNationalities(nationalities, page);
  //   setRecipes(newRecipes[type].slice(0, TWELVE));
  // };

  return (
    <div>
      <Header title="Explore Nationalities" isSearchButton />

      <div>
        <select data-testid="explore-by-nationality-dropdown">
          {allNationalities.map((nationalities, index) => (
            <option
              key={ index }
              data-testid={ `${nationalities.strArea}-option` }
            >
              {nationalities.strArea}
            </option>
            // <Link
            //   to={ `/${page}` }
            //   key={ index }
            //   onClick={ () => {
            //     handleClick(nationalities.strArea);
            //   } }
            // >
            //   <div data-testid={ `${index}-ingredient-card` } />
            // </Link>
          ))}
        </select>
      </div>

      <Footer />
    </div>
  );
}

export default Nationalities;
