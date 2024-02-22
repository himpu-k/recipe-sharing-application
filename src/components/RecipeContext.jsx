import React, { createContext, useState, useContext } from 'react';

// Create a Context
const RecipeContext = createContext();

// Provider component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Recipe 1',
      description: 'Description 1',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    },
    {
      id: 2,
      title: 'Recipe 2',
      description: 'Description 2',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    },
  ]);

  // Function to add a new recipe
  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: recipes.length + 1 }]);
  };

  // Function to delete a recipe
  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  // Function to update a recipe
  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, addRecipe, deleteRecipe, updateRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook to use the recipe context
export const useRecipes = () => useContext(RecipeContext);
