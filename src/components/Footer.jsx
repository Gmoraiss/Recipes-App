import React from 'react';

function Footer() {
  return (
    <footer data-testid="footer">
      <button
        data-testid="drinks-bottom-btn"
        type="button"
      // onClick={ }
      >
        Bebidas
      </button>

      <button
        data-testid="explore-bottom-btn"
        type="button"
      // onClick={  }
      >
        Explorar
      </button>

      <button
        data-testid="food-bottom-btn"
        type="button"
      // onClick={ }
      >
        Comida
      </button>

    </footer>
  );
}

export default Footer;
