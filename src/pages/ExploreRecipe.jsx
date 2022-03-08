import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

function ExploreRecipe() {
  const history = useHistory();

  const pageTitle = history.location.pathname
    .split('/')[2];
  return (
    <div>
      <Header title={ pageTitle === 'foods' ? 'Explore Foods' : 'Explore Drinks' } />

    </div>
  );
}

export default ExploreRecipe;
