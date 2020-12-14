export type BlogPostProps = {
    title: string;
    date: string;
    image: string;
    contentUrl: string;
    preview: string;
}

/**
 * These are the individual blog posts.
 */
const blogPosts: BlogPostProps[] = [
  {
    title:      'Welcome to my Blog!',
    date:       'December 13, 2020',
    image:      './images/welcomeheader.png',
    contentUrl: require('./welcome.md'),
    preview:    'Learn about my life, my passions, and my goals. I am so happy you are here, feel free to stay a while!',
  },
  {
    title:      'This is an Example Blog Post This is a long one',
    date:       'December 16, 2020',
    image:      './images/example-image.png',
    contentUrl: require('./example-blog-post.md'),
    preview:    'lorem espion',
  },
  {
    title:      'This is an Example Blog Post 2',
    date:       'December 16, 2020',
    image:      './images/example-image.png',
    contentUrl: require('./example-blog-post.md'),
    preview:    'lorem espion',
  },
];

export default blogPosts;
