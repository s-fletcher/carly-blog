import React, { useEffect, useState } from 'react';
import '../styles/blog.scss';
// import marked from 'marked';
import blogPosts, { BlogPost } from '../blog-posts/blog-posts';

type PostPreview = {
  title: string;
  date: string;
  image: string;
  preview: string;
}

/**
 * Gallery of blog posts
 */
const Blog: React.FC = () => {
  const [postData, setPostData] = useState<PostPreview[]>([]);

  useEffect(() => {
    /**
     * Get post data
     */
    async function getPostData(post: BlogPost): Promise<void> {
      let preview = 'test';

      await fetch(post.contentUrl)
        .then((res) => res.text())
        .then((text) => {
          preview = `${text.substr(0, 200).replace('# ', '')}...`;
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

  /**
   * Renders a preview for a single blog post
   */
  const renderPostPreview = (post: PostPreview): JSX.Element => (
    <div key={post.title}>
      <p>{post.title}</p>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.preview }} />
    </div>
  );

  return (
    <div id="blog">
      <div className="container">
        {postData.map((post) => renderPostPreview(post))}
      </div>
    </div>
  );
};

export default Blog;
