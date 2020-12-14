export type BlogPostProps = {
    /**
     * Title of your blog post
     */
    title: string;

    /**
     * Date blog post was published
     */
    date: string;

    /**
     * Url where image is located. Store it in /public/images
     *
     * Ex: './images/file-name.png'
     */
    imageUrl: string;

    /**
     * Url where content is located. It's in the same folder
     * this file is in.
     *
     * Ex: './blog-post-name.md'
     */
    contentUrl: string;

    /**
     * Text to show for preview
     */
    preview: string;

    /**
     * How image is positioned in the preview.
     * Formatted as 'horizontal vertical'
     *
     * Ex: 'center 10%'
     */
    previewImagePos: string;

    /**
     * How image is positioned in the blog post
     * header. Formatted as 'horizontal vertical'
     *
     * Ex: 'center 10%'
     */
    headerImagePos: string;
}

/**
 * These are the individual blog posts.
 */
const blogPosts: BlogPostProps[] = [
  {
    title:           'Welcome to my Blog!',
    date:            'December 13, 2020',
    imageUrl:        './images/welcomeheader.png',
    contentUrl:      require('./welcome.md'),
    preview:         'Learn about my life, my passions, and my goals. I am so happy you are here, feel free to stay a while!',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
  {
    title:           'This is an Example Blog Post This is a long one',
    date:            'December 16, 2020',
    imageUrl:        './images/example-image.png',
    contentUrl:      require('./example-blog-post.md'),
    preview:         'lorem espion',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
  {
    title:           'This is an Example Blog Post 2',
    date:            'December 16, 2020',
    imageUrl:        './images/example-image.png',
    contentUrl:      require('./example-blog-post.md'),
    preview:         'lorem espion',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
];

export default blogPosts;
