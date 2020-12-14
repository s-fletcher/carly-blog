export type BlogPostProps = {
    title: string;
    date: string;
    image: string;
    contentUrl: string;
}

/**
 * These are the individual blog posts.
 */
const blogPosts: BlogPostProps[] = [
  {
    title:      'Welcome to my Blog!',
    date:       'December 13, 2020',
    image:      require('./images/welcome.png'),
    contentUrl: require('./welcome.md'),
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
