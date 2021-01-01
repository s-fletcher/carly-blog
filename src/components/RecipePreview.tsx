import { paramCase } from 'change-case';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecipePostProps } from '../recipe-posts';
import jumpToTop from '../lib/jumpToTop';
import '../styles/recipe-preview.scss';
import timeToText from '../lib/timeToText';

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
      <Link to={`/recipe/${paramCase(title)}`}>
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
        <div className="info">
          <div className="title-preview">
            <h2>{title}</h2>
            <p>{preview}</p>
          </div>
          <div className="time">
            <p><strong>Total time</strong> {timeToText(prepTime + cookTime)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RecipePreview;
