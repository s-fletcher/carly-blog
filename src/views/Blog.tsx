import React, { useEffect, useState } from 'react';
import '../styles/blog.scss';
// import marked from 'marked';
import blogPosts, { BlogPostProps } from '../blog-posts/blog-posts';
import BlogPreview from '../components/BlogPreview';
import jumpToTop from '../lib/jumpToTop';

/**
 * Gallery of blog posts
 */
const Blog: React.FC = () => {
  const [postData, setPostData] = useState<BlogPostProps[]>([]);
  const [welcomePost, setWelcomePost] = useState<BlogPostProps>();

  useEffect(() => {
    jumpToTop();
  }, []);

  useEffect(() => {
    if (blogPosts[postData.length + 1]) {
      if (!welcomePost) {
        setWelcomePost(blogPosts[0]);
      } else {
        setPostData(postData.concat(blogPosts[postData.length + 1]));
      }
    }
  }, [postData, welcomePost]);

  return (
    <div id="blog">
      <div className="featured">
        {welcomePost ? <BlogPreview key="featured" {...welcomePost} /> : ''}
      </div>
      <div className="container">
        {postData.reverse().map((post) => <BlogPreview key={post.title} {...post} />)}
      </div>
    </div>
  );
};

export default Blog;
