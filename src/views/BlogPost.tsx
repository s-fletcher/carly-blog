import React, { useEffect, useState } from 'react';
import '../styles/blog-post.scss';
import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';
import { paramCase, sentenceCase } from 'change-case';
import blogPosts from '../blog-posts/blog-posts';

type BlogPostProps = {
    title: string;
    date: string;
    image: string;
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

  useEffect(() => {
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
      }
    }

    const postTitle = paramCase(location.pathname.toLowerCase());
    getPostDataUsingUrl(postTitle);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="blog-post">
      <div className="container">
        <p>{post?.date}</p>
        <h1>{post?.title}</h1>
        {/* <div className="image-border"> */}
        <div className="image-container" style={{ backgroundImage: `url(${post?.image})` }} />
        {/* </div> */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post ? post.content : '' }} />
      </div>
    </div>
  );
};

export default withRouter(BlogPost);
