import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="fixed-bottom"
    >
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        src={ drinkIcon }
      // onClick={ }
      >
        Bebidas
      </button>

      <button
        data-testid="explore-bottom-btn"
        type="button"
        src={ exploreIcon }
      // onClick={  }
      >
        Explorar
      </button>

      <button
        data-testid="food-bottom-btn"
        type="button"
        src={ mealIcon }
      // onClick={ }
      >
        Comida
      </button>

    </footer>
  );
}

export default Footer;
