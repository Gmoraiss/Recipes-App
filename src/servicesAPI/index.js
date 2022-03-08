const DEFAULT_QTD = 12;
const FIVE = 5;

export const fetchByIngredient = async (ingrediente) => {
  const INGREDIENTS_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const data = await (await fetch(INGREDIENTS_URL)).json();
  console.log(data);
  return data;
};
export const fetchByName = async (name) => {
  const NAME_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const data = await (await fetch(NAME_URL)).json();
  console.log(data);

  return data;
};
export const fetchFirstLetter = async (firstLetter) => {
  const LETTER_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const data = await (await fetch(LETTER_URL)).json();
  console.log(data);

  return data;
};
export const fetchDrinks = async (qtd = DEFAULT_QTD) => {
  const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const { drinks } = await (await fetch(DRINKS_URL)).json();
  const newData = drinks.slice(0, qtd);
  return newData;
};
export const fetchMeal = async (qtd = DEFAULT_QTD) => {
  const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const { meals } = await (await fetch(MEAL_URL)).json();
  const newData = meals.slice(0, qtd);
  return newData;
};
export const fetchDrinkDetails = async (id) => {
  const DETAILS_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { drinks } = await (await fetch(DETAILS_URL)).json();
  return drinks;
};
export const fetchMealDetails = async (id) => {
  const DETAILS_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { meals } = await (await fetch(DETAILS_URL)).json();
  return meals;
};
export const fetchCategoryMeal = async () => {
  const CATEGORY_MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const { meals } = await (await fetch(CATEGORY_MEALS_URL)).json();
  const newData = meals.slice(0, FIVE);
  return newData.map((e) => e.strCategory);
};
export const fetchCategoryDrinks = async () => {
  const CATEGORY_DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { drinks } = await (await fetch(CATEGORY_DRINKS_URL)).json();
  const newData = drinks.slice(0, FIVE);
  return newData.map((e) => e.strCategory);
};
export const fetchSelectCategoryDrinks = async (category) => {
  const SELECT_CATEGORY_DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const { drinks } = await (await fetch(SELECT_CATEGORY_DRINKS_URL)).json();
  const newData = drinks.slice(0, DEFAULT_QTD);
  return newData;
};
export const fetchSelectCategoryMeals = async (category) => {
  const SELECT_CATEGORY_MEALS_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { meals } = await (await fetch(SELECT_CATEGORY_MEALS_URL)).json();
  const newData = meals.slice(0, DEFAULT_QTD);
  return newData;
};
