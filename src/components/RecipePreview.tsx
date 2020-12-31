import { paramCase } from 'change-case';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipePostProps } from '../recipe-posts';
import jumpToTop from '../lib/jumpToTop';
import '../styles/recipe-preview.scss';

/**
 * Blog preview shown in the blog gallery
 */
const RecipePreview = ({
  title, imageUrl, preview, previewImagePos, prepTime, cookTime,
}: RecipePostProps): JSX.Element => {
  useEffect(() => {
    jumpToTop();
  }, []);

  return (
    <div className="recipe-preview">
      <Link to={`/${paramCase(title)}`}>
        <div className="image-border">
          <div className="no-overflow">
            <div
              className="image-container"
              style={{
                backgroundImage:    `url(${imageUrl})`,
                backgroundPosition: previewImagePos,
              }}
            />
          </div>
        </div>
        <h2>{title}</h2>
        <p>{preview}</p>
        <p>{prepTime}</p>
        <p>{cookTime}</p>
      </Link>
    </div>
  );
};
export default RecipePreview;
