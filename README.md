# Carly's Blog

## How to add a new blog post

> We first need to create a plan that the website can use to know where everything is for the website.

1. Navigate to `src/blog-posts`

2. Open `blog-posts.ts`

3. Starting from line 11, edit one of the objects like the following:

```
{
  title: '',
  date: '',
  image: require('./images/name-of-image.png'),
  contentUrl: require('./name-of-content.md')
}
```

4. Click `Commit changes`

> Now we need to actually write out our blog post

5. Create a new file by clicking `Add file > Create new file` in the top right corner.

6. Name it `name-of-content.md`

7. Write your blog post in markdown format in the text file below. View this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) for help.

8. Click `Commit new file`

> Next, we'll upload an image for our blog post

9. Find an image you like online or in your photos

10. Rename the image to `name-of-image.png` and resize it to be <= 800px in width.

11. Go to the `images` folder

12. Upload the image by clicking `Add file > Upload new file`

13. Click `Commit changes`

> Yay! You've uploaded your new blog post, let's check to see that it worked.

14. Navigate to [carlyburwell.com](https://carlyburwell.com) to make sure that it's working.
