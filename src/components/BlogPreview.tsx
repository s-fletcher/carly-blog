import { paramCase } from 'change-case';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog-preview.scss';

export type BlogPreviewProps = {
    title: string;
    image: string;
    content: string;
    preview: string;
  }

/**
 * Blog preview shown in the blog gallery
 */
const BlogPreview = ({ title, image, preview }: BlogPreviewProps): JSX.Element => (
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
