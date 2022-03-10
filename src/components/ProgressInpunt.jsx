import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context';

function ProgressInpunt({ ingredient, index, id, pathname }) {
  const { measures } = useContext(MyContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (pathname === 'foods') {
        const transtionStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
        localStorage.setItem('inProgressRecipes', JSON
          .stringify(
            { ...transtionStorage,
              meals: { ...transtionStorage.meals,
                [id]:
                 [...transtionStorage.meals[id], ingredient[1]] } },
          ));
      } else {
        const transtionStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
        localStorage.setItem('inProgressRecipes', JSON
          .stringify(
            { ...transtionStorage,
              cocktails: { ...transtionStorage.cocktails,
                [id]:
                 [...transtionStorage.cocktails[id], ingredient[1]] } },
          ));
      }
    }
  };

  /*   const validChecks = () => {
    const transtionStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const type = pathname === 'foods' ? 'meals' : 'cocktails';
    if (Object.keys(transtionStorage[type])) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    validChecks();
  }, []);
 */
  return (
    <div>
      <label
        htmlFor={ index }
        data-testid={ `${index}ingredient-step` }
      >
        <input
          id={ index }
          type="checkbox"
          value={ isChecked }
          onClick={ handleClick }

        />
        {ingredient[1]}
        {''}
        {measures[index][1]}

      </label>

    </div>

  );
}

ProgressInpunt.propTypes = {
  id: PropTypes.string.isRequired,
  ingredient: PropTypes.arrayOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,

};

export default ProgressInpunt;
