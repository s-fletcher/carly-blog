import React, { useEffect, useState } from 'react';
import '../styles/blog.scss';
// import marked from 'marked';
import blogPosts, { BlogPostProps } from '../blog-posts/blog-posts';
import BlogPreview, { BlogPreviewProps } from '../components/BlogPreview';

/**
 * Gallery of blog posts
 */
const Blog: React.FC = () => {
  const [postData, setPostData] = useState<BlogPreviewProps[]>([]);

  useEffect(() => {
    /**
     * Get post data from content url on front end
     */
    async function getPostData(post: BlogPostProps): Promise<void> {
      let content = '';

      await fetch(post.contentUrl)
        .then((res) => res.text())
        .then((text) => {
          content = text;
        });

      const newData = postData.concat({
        ...post,
        content,
        preview: `${content.substr(0, 140).replace('# ', '')}...}`,
      });

      setPostData(newData);
    }

    if (blogPosts[postData.length]) {
      getPostData(blogPosts[postData.length]);
    }
  }, [postData]);

  return (
    <div id="blog">
      <div className="container">
        {postData.map((post) => <BlogPreview key={post.title} {...post} />)}
      </div>
    </div>
  );
};

export default Blog;
