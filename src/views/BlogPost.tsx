import React, { useEffect, useState } from 'react';
import '../styles/blog-post.scss';
import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';
import { paramCase } from 'change-case';
import mediumZoom from 'medium-zoom';
import blogPosts, { BlogPostProps as RawBlogPostProps } from '../blog-posts/blog-posts';
import jumpToTop from '../lib/jumpToTop';
import NotFound from './NotFound';

interface BlogPostProps extends RawBlogPostProps{
    content: string;
}

interface Props extends Partial<BlogPostProps> {
    location: Location;
}

/**
 * Blog posts
 */
const BlogPost = ({ location }: Props): JSX.Element => {
  const [post, setPost] = useState<BlogPostProps>();
  const [found, setFound] = useState<boolean>(true);

  useEffect(() => {
    jumpToTop();

    /**
     * Find and retrieve post data from blog list depending on url
     */
    async function getPostDataUsingUrl(postTitle: string): Promise<void> {
      let newContent = '';
      const rawPost = blogPosts.find((obj) => paramCase(obj.title).toLowerCase() === postTitle);

      // Checking if we were able to find the post
      if (rawPost) {
        await fetch(rawPost.contentUrl)
          .then((res) => res.text())
          .then((text) => {
            newContent = marked.parse(text);
          });

        setPost({
          ...rawPost,
          content: newContent,
        });
      } else {
        setFound(false);
      }
    }

    const postTitle = paramCase(location.pathname.toLowerCase().replace('post', ''));
    getPostDataUsingUrl(postTitle);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (post) {
      mediumZoom('img', { background: 'rgba(255,255,255,0.75)' });
    }
  }, [post]);

  if (found) {
    return (
      <div id="blog-post">
        <div className="container">
          <p className="date">{post?.date}</p>
          <h1 className="title">{post?.title}</h1>
          <div
            className="image-container"
            data-zoomable
            style={{
              backgroundImage:    `url(${post?.imageUrl})`,
              backgroundPosition: post?.headerImagePos,
            }}
          />
          {/* eslint-disable-next-line react/no-danger */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post ? post.content : '' }} />
        </div>
      </div>
    );
  }
  return (
    <NotFound />
  );
};

export default withRouter(BlogPost);
