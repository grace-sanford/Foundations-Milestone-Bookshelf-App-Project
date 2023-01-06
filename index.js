//===========================
//#region STATE
//===========================

/**
 * Rough implementation of a React hook that maintains state
 * @param {*} initial the initial value of teh state
 * @returns [getter, setter]
 */

const useState = (initial) => {
  //this is like `let bookshelf = bookData`, but we're putting it in a function; this way, you can't access the treasure chest directly, you can only use the keywords I gave you
  let closure = initial;
  const getState = () => closure;
  const setState = (update) => (closure = update);
  return [getState, setState];
};

//getBookshelf refers to the closure
//setBookshelf updates the closure
//we're using the function useState to remember bookData

const [getBookshelf, setBookshelf] = useState(bookData);

//#endregion State

//===========================
//#region RENDERING
//===========================

/////////////////////------RENDER BOOKSHELF-------/////////////////////
const renderBookshelf = (bookshelf) => {
  const ul = document.querySelector("ul");

  //We want the same amount of things, we want to TRANSFORM the elements in the array to be html elements
  const renderedBooks = bookshelf.map((book) => {
    const bookInstance = new Book(book.title, book.author);
    return bookInstance.render();
  });

  // we want to KEEP only the books that have been favorited
  // use REDUCE to count the total number of favorite books, which is indicated by a DOM element
  // just taking things out of the existing array

  //Create html elements for fav book count and button to update fav book count.

  const updateFavCountBtn = document.createElement("button");
  updateFavCountBtn.classList.add("updateFavCountBtn");
  updateFavCountBtn.textContent = "Update Favorite Count";

  const favBookCount = document.createElement("span");
  favBookCount.classList.add("favBookCount");
  favBookCount.textContent = `${0}`;

//   const countFavoriteBooks = () => {
//     bookshelf.reduce((count, book) => (book.favorite ? count + 1 : count), 0);
//   };

  //Create event listener. When button is clicked, add book to fav books array and update the counter
  updateFavCountBtn.addEventListener("click", () => {
    favBookCount.textContent = bookshelf.reduce((count, book) => (book.favorite ? count + 1 : count), 0);
  });

  // //... is called the spread operator and it basically says here's everything inside the array
  ul.replaceChildren(...renderedBooks);

  ul.prepend(favBookCount, updateFavCountBtn);

  return ul;
};

///////////////////-------------RENDER APP----------------////////////////
//Work backward: render app
//Instead of classes, I'm making functions
//Functional programming style
//RenderApp takes an app and updates the page with the name and the bookshelf(rendered)

// const renderApp = ({name, bookshelf}) => {
const renderApp = (app) => {
  const h1 = document.createElement("h1");
  h1.textContent = app.name;
  h1.classList.add("h1");

  const ui = document.querySelector(".ui");

  const renderedBookshelf = renderBookshelf(app.bookshelf);
  //replaceChildren: so that whenever we update the bookshelf, we update the page
  const main = document.querySelector("main");
  main.replaceChildren(h1, ui, renderedBookshelf);
};

renderApp({
  name: "Library for Learning",
  bookshelf: getBookshelf(),
});

//#endregion RENDERING

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
