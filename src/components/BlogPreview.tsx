import { paramCase } from 'change-case';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPostProps } from '../blog-posts/blog-posts';
import jumpToTop from '../lib/jumpToTop';
import '../styles/blog-preview.scss';

/**
 * Blog preview shown in the blog gallery
 */
const BlogPreview = ({ title, imageUrl, preview, previewImagePos }: BlogPostProps): JSX.Element => {
  useEffect(() => {
    jumpToTop();
  }, []);

  return (
    <div className="blog-preview">
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
      </Link>
    </div>
  );
};
export default BlogPreview;
