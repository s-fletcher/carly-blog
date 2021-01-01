export type RecipePostProps = {
  /**
   * Title of your recipe
   */
  title: string;

  /**
   * Url where image is located. Store it in /public/images
   *
   * Ex: './images/file-name.png'
   */
  imageUrl: string;

  /**
   * Text to show for preview
   */
  preview: string;

  /**
   * Text to show for description (same as preview if empty)
   */
  description?: string;

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

  /**
   * Ingredients of recipe
   */
  ingredients: string[];

  /**
   * Directions of recipe
   */
  directions: string[];

  /**
   * Prep time in minutes
   */
  prepTime: number;

  /**
   * Cook time in minutes
   */
  cookTime: number;
}

/**
 * These are the individual blog posts.
 */
const recipePosts: RecipePostProps[] = [
  {
    title:           'Welcome to my Recipe Page!',
    imageUrl:        '/images/recipe3.png',
    preview:         'Learn more about my passion for cooking and what to expect when viewing this page. ',
    description:     'If you read my introduction post, you know that I love to cook and bake! My mom is an excellent home baker. She has a sweet tooth, and it shows when she makes the most delicious cookies and cake bars. My dad worked in a restaurant for a while, so he knows all the in-n-outs of the kitchen. He is really good at cooking, so good that he doesn’t even use a recipe! I remember cooking with him a lot when I was younger. At times, I was a great helper, but I would have to argue most of the time I was just the taste tester.  My idea for this part of my page is to share some of my favorite recipes with step-by-step instructions. I get a lot of inspiration from Pinterest or from my dad, but I always end up tweaking them and making them my own.Being a college student- many of my recipes use minimal ingredients and minimal kitchen equipment. However, I do like to splurge on some recipes, so look out for my previews on each post for quick overviews on the recipes! Below is what my recipe layout will look like... I hope you enjoy my recipes and eat up!',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
    ingredients:     [
      'ingredient 1',
      'ingredient 2',
      'ingredient 3...',
    ],
    directions: [
      'step 1',
      'step 2',
      'step 3...',
    ],
    prepTime: 10,
    cookTime: 60,
  },
];

export default recipePosts;
