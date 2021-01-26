# React Redux Gallery Example

Example gallery app made with React and Redux.

Data is taken from [JSONPlaceholder](https://jsonplaceholder.typicode.com) API:

  - [`/albums` (100 items)](https://jsonplaceholder.typicode.com/albums)
  - [`/photos` (1000 items)](https://jsonplaceholder.typicode.com/photos)
  - [`/users` (10 items)](https://jsonplaceholder.typicode.com/users)

## Features

  - React & Redux + Thunk, nuff said.
  - No create-react-app scripts, just plain Webpack 5 bundling and live development
  - *Gallery*, i.e. list of albums with photos inside
    - Small preview photos in album and large full-size photos in modal
    - One can open any photo in a modal page
    - Modal navigation (left and right for previous and next photos, backdrop click to exit)
    - Open photo in new tab for individual photo viewer
  - Adaptive design (for desktop and mobile)
  - Modular CSS
