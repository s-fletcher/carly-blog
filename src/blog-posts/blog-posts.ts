export type BlogPost = {
    title: string;
    date: string;
    image: string;
    contentUrl: string;
}

/**
 * These are the individual blog posts.
 */
const blogPosts: BlogPost[] = [
  {
    title:      'This is an Example Blog Post',
    date:       'December 12, 2020',
    image:      require('./images/example-image.png'),
    contentUrl: require('./example-blog-post.md'),
  },
  {
    title:      'This is an Example Blog Post This is a long one',
    date:       'December 16, 2020',
    image:      require('./images/example-image.png'),
    contentUrl: require('./example-blog-post.md'),
  },
  {
    title:      'This is an Example Blog Post 2',
    date:       'December 16, 2020',
    image:      require('./images/example-image.png'),
    contentUrl: require('./example-blog-post.md'),
  },
];

export default blogPosts;
