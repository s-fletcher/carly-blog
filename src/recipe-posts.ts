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
    title:           'Chicken Fettuccine Alfredo',
    imageUrl:        '/images/welcomeheader.png',
    preview:         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor. Vel pretium lectus quam id leo. Nunc aliquet bibendum enim facilisis gravida neque convallis. Faucibus purus in massa tempor nec feugiat.',
    description:     '',
    previewImagePos: 'center 10%',
    headerImagePos:  'center 10%',
    ingredients:     [
      '2 large boneless skinless chicken breasts',
      '2 cups low-sodium chicken broth',
      '4 cloves garlic, minced',
      '2 cups heavy cream',
      'salt to taste',
      '1 pound fettuccine',
      '1 sprig chopped fresh parsley',
      '2 cups freshly grated Parmigiano-Reggiano cheese, divded',
    ],
    directions: [
      'Combine chicken breasts and chicken broth in a saucepan over medium-high heat. Bring to a boil, cover, and reduce heat to low; simmer for 5 minutes. Turn breasts, cover, and simmer another 5 minutes. Remove from heat and let sit with the cover on for 15 minutes.',
      'Remove chicken breasts from the broth and set aside to cool, reserving the broth in the saucepan. Once the chicken is cool enough to handle, cut into bite-size slices.',
      'Return the chicken broth to medium heat and cook until reduced to 1 cup.',
      'Stir garlic, black pepper, and heavy cream into the reduced broth; bring to a simmer and remove from heat.',
      'Whisk egg yolks in a bowl until smooth. Beat 1 tablespoon of the warm cream mixture into the eggs until thoroughly incorporated; repeat until about 1/2 cup of the warm cream mixture is used.',
      'Whisk the warm cream and egg mixture back into the saucepan with the remaining cream mixture. Cook over medium-low heat, whisking constantly, until the mixture almost comes to a simmer and thickens, about 5 minutes. Season with salt and black pepper to taste.',
      'Bring a large pot of lightly salted water to a boil. Cook fettuccine in boiling water, stirring occasionally, until nearly cooked through, about 7 minutes. Drain.',
      'Stir parsley, 1 cup of Parmigiano-Reggiano, and cream mixture into the pasta. Remove from heat, cover, and let sit for a few minutes until thick.',
      'Fold chicken and 1 cup Parmigiano-Reggiano into the pasta mixture to serve.',
    ],
    prepTime: 10,
    cookTime: 60,
  },
];

export default recipePosts;
