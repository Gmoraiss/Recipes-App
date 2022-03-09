import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeInfo from '../components/RecipeInfo';
import MyContext from '../context';

function ProgressRecipe() {
  const { details, ingredients, measures } = useContext(MyContext);
  const { location: { pathname } } = useHistory();
  const typeDrink = pathname.split('/')[1] === 'drinks';

  const recipeInfo = {
    details,
    typeDrink,
    ingredients,
    pathname,
    measures,
  };

  return (
    <div>
      <RecipeInfo recipeInfo={ recipeInfo } page="in-progress" />
    </div>
  );
}

export default ProgressRecipe;
