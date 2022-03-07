import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <Switch>
      <RecipesProvider>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ RecipeDetails } />
        <Route exact path="/drinks/:id" component={ RecipeDetails } />
        <Route exact path="/foods/:id/in-progress" component={ ProgressRecipe } />
        <Route exact path="/drinks/:id/in-progress" component={ ProgressRecipe } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreRecipe } />
        <Route exact path="/explore/drinks" component={ ExploreRecipe } />
        <Route exact path="/explore/foods/ingredients" component={ Ingredients } />
        <Route exact path="/explore/drinks/ingredients" component={ Ingredients } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
      </RecipesProvider>
    </Switch>
  );
}

export default App;
