# Adam Bye portfolio
This is my portfolio made in Tailwind CSS in which I present projects I've made and showcase my skills.
![portfolio](https://user-images.githubusercontent.com/47569957/105241293-c1727a00-5b6d-11eb-8783-a78866f2a98b.PNG)

## What is Tailwind

Tailwind is a utility-first CSS framework. In contrast to other CSS frameworks like Bootstrap or Materialize CSS it doesn't come with predefined components. Instead Tailwind CSS operates on a lower level and provides you with a set of CSS helper classes.

## Getting started
Clone or download the project and navigate to the public folder which contains index.html. You can open this in a browser/editor of choice to view or make changes to the project.

## Libraries
#### Installation Tailwind
Open a terminal and run the following command
```bash 
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

Afterwards run this command
```bash
npx tailwindcss init
```

Add the following to the made CSS file.
```bash 
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### AOS
To make use of the scroll effects used in my portfolio add the following lines to the file you want to use them.
```bash 
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw==" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossorigin="anonymous" />
```
A list of every effect can be found here [Animate On Scroll Library](https://michalsnik.github.io/aos/)

### Heroicons
The icons used are from [heroicons](https://heroicons.dev/)


## Documentation
For the complete documentation on Tailwind CSS visit
[Tailwind](https://tailwindcss.com/docs)

## License
[MIT](https://choosealicense.com/licenses/mit/)
