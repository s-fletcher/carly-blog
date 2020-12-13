import React, { useEffect, useState } from 'react';
import '../styles/blog.scss';
// import marked from 'marked';
import blogPosts, { BlogPost } from '../blog-posts/blog-posts';
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
    async function getPostData(post: BlogPost): Promise<void> {
      let preview = 'test';

      await fetch(post.contentUrl)
        .then((res) => res.text())
        .then((text) => {
          preview = `${text.substr(0, 140).replace('# ', '')}...`;
        });

      const newData = postData.concat({
        ...post,
        preview,
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
        {postData.map((post) => <BlogPreview {...post} />)}
      </div>
    </div>
  );
};

export default Blog;
