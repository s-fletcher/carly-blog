import React from 'react';
import '../styles/blog-preview.scss';

export type BlogPreviewProps = {
    title: string;
    image: string;
    preview: string;
  }

/**
 * Blog preview shown in the blog gallery
 */
const BlogPreview = ({ title, image, preview }: BlogPreviewProps): JSX.Element => (
  <div id="blog-preview">
    <div className="image-border">
      <div className="image-container" style={{ backgroundImage: `url(${image})` }} />
    </div>
    <h2>{title}</h2>
    <p>{preview}</p>
  </div>
);

export default BlogPreview;
