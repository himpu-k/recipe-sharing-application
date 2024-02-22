import { useRecipes } from './RecipeContext';
import { useState } from 'react';

const RecipeInput = () => {
  const [input, setInput] = useState({});
  const { addRecipe } = useRecipes();

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          placeholder="Recipe title"
        />
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="text"
          name="ingredients"
          value={input.ingredients}
          onChange={(e) =>
            setInput({ ...input, ingredients: e.target.value.split(',') })
          }
          placeholder="Ingredients"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addRecipe(input);
            setInput({});
          }}
        >
          Add Recipe
        </button>
      </form>
    </>
  );
};

export default RecipeInput;
