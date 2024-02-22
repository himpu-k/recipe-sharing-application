import { Link } from 'react-router-dom';
import { useRecipes } from './RecipeContext';
import RecipeInput from './RecipeInput';

const RecipeList = () => {
  const { recipes } = useRecipes();
  return (
    <>
      <RecipeInput />
      <div>
        <h1>Recipe List</h1>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
