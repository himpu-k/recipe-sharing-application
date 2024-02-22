import { useParams } from 'react-router-dom';
import { useRecipes } from './RecipeContext';

const RecipeDetail = () => {
  const { recipes } = useRecipes();
  let { recipeId } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
