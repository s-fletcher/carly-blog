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
    title:           'Welcome to my recipe page!',
    imageUrl:        '/images/welcomeheader.png',
    preview:         'Learn more about my passion for cooking and what to expect when viewing this page. ',
    description:     'If you read my introduction post, you know that I love to cook and bake! My mom is an excellent home baker. She has a sweet tooth, and it shows when she makes the most delicious cookies and cake bars. My dad worked in a restaurant for a while, so he knows all the in-n-outs of the kitchen. He is really good at cooking, so good that he doesn’t even use a recipe! I remember cooking with him a lot when I was younger. At times, I was a great helper, but I would have to argue most of the time I was just the taste tester.  My idea for this part of my page is to share some of my favorite recipes with step-by-step instructions. I get a lot of inspiration from Pinterest or from my dad, but I always end up tweaking them and making them my own.Being a college student- many of my recipes use minimal ingredients and minimal kitchen equipment. However, I do like to splurge on some recipes, so look out for my previews on each post for quick overviews on the recipes! I hope you enjoy my recipes and eat up!
',
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
