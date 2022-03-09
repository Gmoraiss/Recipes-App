import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <Header title="Explore" />
      <div>
        <button
          data-testid="explore-foods"
          type="button"
          className="explore-foods-btn"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          data-testid="explore-drinks"
          type="button"
          className="explore-drinks-btn"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
