import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreRecipe() {
  const history = useHistory();
  const pageTitle = history.location.pathname
    .split('/')[2];
  return (
    <div>

      <Header title={ pageTitle === 'foods' ? 'Explore Foods' : 'Explore Drinks' } />
      <div>

        {pageTitle === 'drinks' ? (
          <div>
            <button
              data-testid="explore-by-ingredient"
              type="button"
              className="explore-ingredient-btn"
              onClick={ () => history.push('/explore/drinks/ingredients') }
            >
              By Ingredient
            </button>

            <button
              data-testid="explore-surprise"
              type="button"
              className="explore-surprise-btn"
            // onClick={ }
            >
              Surprise me!
            </button>
          </div>
        )
          : (
            <div>
              <button
                data-testid="explore-by-ingredient"
                type="button"
                className="explore-ingredient-btn"
                onClick={ () => history.push('/explore/foods/ingredients') }
              >
                By Ingredient
              </button>

              <button
                data-testid="explore-by-nationality"
                type="button"
                className="explore-nationality-btn"
                onClick={ () => history.push('/explore/foods/nationalities') }
              >
                By Nationality
              </button>

              <button
                data-testid="explore-surprise"
                type="button"
                className="explore-surprise-btn"
              >
                Surprise me!
              </button>
            </div>)}

      </div>

      <Footer />

    </div>
  );
}
export default ExploreRecipe;
