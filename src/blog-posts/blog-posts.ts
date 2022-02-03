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
    imageUrl:        '/images/welcomeheader.png',
    contentUrl:      require('./welcome.md'),
    preview:         'Learn about my life, my passions, and my goals. I am so happy you are here, feel free to stay a while!',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
  {
    title:           'The Dreaded Icebreaker Post',
    date:            'December 16, 2020',
    imageUrl:        '/images/icebreakerheader.png',
    contentUrl:      require('./the-dreaded-icebreaker.md'),
    preview:         'We all know the panic of coming up with cool icebreaker facts to share with others, but I am flipping the script. Join me in going over some boring and uninteresting facts about myself as our little icebreaker introduction. ',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
  {
    title:           '2020 - Top Songs of the Year',
    date:            'December 30, 2020',
    imageUrl:        '/images/spotifyheader.png',
    contentUrl:      require('./2020-Top-Songs-of-the-Year.md'),
    preview:         'What was your favorite song this year? A daunting question that I have my 3 friends answer, followed by my top 8 songs of 2020. Give them a listen, you might find your new favorite song!  ',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
    {
    title:           'Part 1: How to Find Your People in College',
    date:            'January 24, 2021',
    imageUrl:        '/images/HT11.png',
    contentUrl:      require('./Part-1-HTFYP.md'),
    preview:         'In part one of this two part series, learn my two most important reminders when trying to make new friends in college.  ',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
    {
    title:           'Part 2: How to Find Your People in College',
    date:            'November 17, 2021',
    imageUrl:        '/images/HT11.png',
    contentUrl:      require('./Part-2-HTFYP.md'),
    preview:         'In part two of this two part series, discover three more important tips to aid in the process of making new friends in college.  ',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
      {
    title:           '2021 - Top Songs of the Year',
    date:            'December 30, 2021',
    imageUrl:        '/images/top-2021.png',
    contentUrl:      require('./2021-Top-Songs-of-the-Year.md'),
    preview:         'It is time for another addition of Top Songs of the Year! Have you heard these? Or are you about to find your new favorite song!? Give them a listen and learn a little more about me through my music taste.   ',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
  },
];

export default blogPosts;
