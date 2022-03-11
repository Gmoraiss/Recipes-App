import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { copyUrl } from '../servicesAPI';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [isShowCopied, setIsShowCopied] = useState(false);

  const attFavorites = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(storage);
  };

  useEffect(() => {
    attFavorites();
  }, []);

  const handleCopy = (typeDrink, pathname) => {
    copy(copyUrl(typeDrink, pathname));
    setIsShowCopied(true);
  };

  const removeFavoriteStorage = ({ target }) => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...storage.filter((item) => item.id
        !== target.id)]));
    attFavorites();
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <div>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Foods</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </div>
      <section>
        {
          favorites.map((recipe, index) => {
            const typeFood = recipe.type === 'food';
            const pathName = typeFood ? `/foods/${recipe.id}` : `/drinks/${recipe.id}`;

            return (
              <div key={ index }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipe.image }
                  alt={ recipe.id }
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                <p data-testid={ `${index}-horizontal-top-text` }>

                  {recipe.nationality}
                  {' - '}
                  {recipe.alcoholicOrNot !== '' ? recipe.alcoholicOrNot : recipe.category}
                </p>
                <button
                  data-testid="share-btn"
                  type="button"
                  onClick={ () => handleCopy(typeFood, pathName) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="share-btn"
                  />
                </button>
                <button
                  type="button"
                  src={ blackHeartIcon }
                  alt="favorite-btn"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  id={ recipe.id }
                  onClick={ removeFavoriteStorage }
                >
                  {/* <img /> */}
                </button>
                {
                  isShowCopied && <p>Link copied!</p>
                }

              </div>
            );
          })
        }
      </section>

    </div>
  );
}

export default Favorites;
