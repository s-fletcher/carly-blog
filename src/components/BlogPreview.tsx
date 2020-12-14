import { paramCase } from 'change-case';
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostProps } from '../blog-posts/blog-posts';
import '../styles/blog-preview.scss';

/**
 * Blog preview shown in the blog gallery
 */
const BlogPreview = ({ title, image, preview }: BlogPostProps): JSX.Element => (
  <Link to={`/${paramCase(title)}`}>
    <div id="blog-preview">
      <div className="image-border">
        <div className="image-container" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <h2>{title}</h2>
      <p>{preview}</p>
    </div>
  </Link>
);

export default BlogPreview;
