import React, { useEffect, useState } from 'react';
import '../styles/recipes.scss';
import jumpToTop from '../lib/jumpToTop';
import recipePosts, { RecipePostProps } from '../recipe-posts';
import RecipePreview from '../components/RecipePreview';

/**
 * Recipes
 */
const Recipes: React.FC = () => {
  const [recipeData, setRecipeData] = useState<RecipePostProps[]>([]);

  useEffect(() => {
    jumpToTop();
  }, []);

  useEffect(() => {
    if (recipePosts[recipeData.length]) {
      setRecipeData(recipeData.concat(recipePosts[recipeData.length]));
    }
  }, [recipeData]);

  return (
    <div id="recipes">
      <div className="container">
        {recipeData.reverse().map((recipe) => <RecipePreview key={recipe.title} {...recipe} />)}
      </div>
    </div>
  );
};
export default Recipes;
