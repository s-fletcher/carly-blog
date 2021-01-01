import React, { useEffect, useState } from 'react';
import '../styles/recipe-post.scss';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';
import { paramCase } from 'change-case';
import mediumZoom from 'medium-zoom';
import recipePosts, { RecipePostProps } from '../recipe-posts';
import jumpToTop from '../lib/jumpToTop';
import NotFound from './NotFound';
import timeToText from '../lib/timeToText';

interface Props extends Partial<RecipePostProps> {
    location: Location;
}

/**
 * Recipe posts
 */
const RecipePost = ({ location }: Props): JSX.Element => {
  const [recipe, setRecipe] = useState<RecipePostProps>();
  const [found, setFound] = useState<boolean>(true);

  useEffect(() => {
    jumpToTop();

    /**
     * Find and retrieve post data from blog list depending on url
     */
    function getRecipeData(recipeTitle: string): void {
      console.log(recipeTitle);

      const rawPost = recipePosts.find((obj) => paramCase(obj.title).toLowerCase() === recipeTitle);
      if (rawPost) {
        setRecipe(rawPost);
      } else {
        setFound(false);
      }
    }

    const recipeTitle = paramCase(location.pathname.toLowerCase().replace('recipe', ''));
    getRecipeData(recipeTitle);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (recipe) {
      mediumZoom('img', { background: 'rgba(255,255,255,0.75)' });
    }
  }, [recipe]);

  if (found) {
    if (recipe) {
      return (
        <div id="recipe-post">
          <div className="container">
            <h1 className="title">{recipe.title}</h1>
            <div
              className="image-container"
              data-zoomable
              style={{
                backgroundImage:    `url(${recipe.imageUrl})`,
                backgroundPosition: recipe.headerImagePos,
              }}
            />

            <div className="recipe-content">
              <div className="description">
                <p>{recipe.description || recipe.preview}</p>
              </div>

              <div className="split">
                <div className="ingredients">
                  <h2>Ingredients</h2>
                  {recipe.ingredients.map((val) => <Ingredient val={val} />)}
                </div>
                <div className="time">
                  <div><strong>Prep</strong><br />{timeToText(recipe.prepTime)}</div>
                  <div><strong>Cook</strong><br />{timeToText(recipe.cookTime)}</div>
                  <div><strong>Total</strong><br />{timeToText(recipe.prepTime + recipe.cookTime)}</div>
                </div>
              </div>
              <div className="directions">
                <h2>Directions</h2>
                {recipe.directions.map((val, i) => <Direction num={i + 1} val={val} size={recipe.directions.length} />)}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div />;
  }
  return (
    <NotFound />
  );
};

type IngredientProps = {
    val: string;
}

/**
 * Single ingredient component
 */
const Ingredient = ({ val }: IngredientProps): JSX.Element => (
  <div className="item"><div className="dot" /><p>{val}</p></div>
);

type DirectionProps = {
    num: number;
    val: string;
    size: number;
}

/**
 * Single direction component
 */
const Direction = ({ num, val, size }: DirectionProps): JSX.Element => (
  <div className="item">
    <p className={`num ${size >= 10 ? 'long' : ''}`}>{num}</p>
    <div className="text-container">
      <div className="separator" />
      <p className="text">{val}</p>
    </div>
  </div>
);

export default withRouter(RecipePost);
