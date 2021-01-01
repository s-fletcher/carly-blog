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
    title:           'Homemade Tomato Sauce',
    imageUrl:        '/images/recipe3.png',
    preview:         'Pasta sauce so good and easy, you’ll never go back to store bought!',
    description:     '',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
    ingredients:     [
      '1/2 white onion, diced',
      '14oz can fire roasted diced tomatoes',
      '8oz can tomato sauce',
      '4oz chicken broth',
      'Measure with your heart: italian seasoning',
    ],
    directions: [
      'Dice up the onion into small pieces and sauté it in a saucepan until translucent.',
      'In a food processor, grind up the diced tomatoes then put them in the saucepan with the onion.',
      'Add in the can of tomato sauce and chicken broth.',
      'Add in italian seasoning and bring to a simmer.',
      'Serve over pasta, chicken parmigiana, or use in lasagna.',
    ],
    prepTime: 5,
    cookTime: 10,
  },
];

export default recipePosts;
