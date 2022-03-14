import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './footer.css';

function Footer() {
  const history = useHistory();

  const drinkRedirect = () => {
    history.push('/drinks');
  };

  const exploreRedirect = () => {
    history.push('/explore');
  };

  const foodRedirect = () => {
    history.push('/foods');
  };

  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <button
        type="button"
        src={ drinkIcon }
        onClick={ drinkRedirect }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drink Incon"
        />
      </button>

      <button
        type="button"
        src={ exploreIcon }
        onClick={ exploreRedirect }
      >
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="exploreIcon"
        />
      </button>

      <button
        type="button"
        src={ mealIcon }
        onClick={ foodRedirect }
      >
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="mealIcon"
        />

      </button>

    </footer>
  );
}

export default Footer;
