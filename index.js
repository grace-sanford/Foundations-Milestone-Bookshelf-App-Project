// --------------------------
//#region Initialization
// --------------------------
// Select the unordered list portion of the page
const bookshelfElement = document.querySelector(".books");
// Store an instance of the Bookshelf class / (in this case constructor function) in a variable
const bookshelf = new Bookshelf(bookshelfElement);
//     Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is provided to a database when it is being installed. It is especially useful when we want to populate the database with data we want to develop in future.

// So our goal is to “feed” the database with dummy data on its initialization. This can be very helpful especially during the development process or for onboarding new employees that run the development environment (database) locally on their machine.
bookshelf.seed(bookData);

//#endregion Initialization

// --------------------------
//#region Favorite Feature
// --------------------------
// Create DOM elements for favCount and update button by query selecting html elements
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");
// Add an event listener to the update button so that when it's clicked, the function countFavoriteBooks is called on bookshelf and added to the textContent of the favCount DOM element we just initialized
updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
// Create DOM elements for the nav input and search button 
const searchInput = document.querySelector("nav input"); //TO DO: how does it know what nav input is?
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
// Add an event listener to the search button, so when it's clicked, it filters the visible books based on title
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);
  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
// Create Dom element for sort by drop down menu
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
// Add an event listener to the sort by button. When it's clicked, call a function to sort the books depended on the user's choice: either A-Z or Z-A.
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting





// --------------------------
//#region Add and remove books
// --------------------------

//Select DOM elements
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookLanguage = document.querySelector(".language");
const bookSubject = document.querySelector(".subject");

const addBtn = document.querySelector(".addBtn");
// const bookshelfElement = document.querySelector(".books");

/**
 * `createPropertyElement takes an object representing the user's input and an index and returns a correspoing html element.
 */

const createBookshelfElement = (property, i) => {
  // //Create li list element
  // const li = document.createElement("li");
  // li.classList.add("book");

  // //Create a link with the name
  // const book = document.createElement("a");
  // book.textContent = `${book.title}:`
  // li.append(book);

  

  // //Remove btn

  // const removeBtn = document.createElement("button");
  // removeBtn.textContent = "-";
  // removeBtn.addEventListener("click", () => {
  //   //Remove link and re-render
  //   propertyData.splice(i, 1);
  //   bookshelf();
  // });
  // li.prepend(removeBtn);

  // //Comment button

  // const commentBtn = document.createElement("button");
  // commentBtn.textContent = "Comment";

  // const commentContainer = document.createElement("div");
  // commentContainer.append(commentBtn);
  // li.append(commentContainer);

  // // Add an event listener to the comment button
  // commentBtn.addEventListener("click", () => {
  //   //reveals a text input element
  //   const commentInputElement = document.createElement("input");
  //   commentInputElement.placeholder = "Comment";
  //   commentInputElement.classList.add("commentInput");
  //   commentInputElement.maxLength = 280;
  //   commentContainer.append(commentInputElement);

  //   //and a "send button"
  //   const sendBtn = document.createElement("button");
  //   sendBtn.textContent = ">";
  //   commentContainer.append(sendBtn);

  //   sendBtn.addEventListener("click", () => {
  //     //create new property to add to property objects in array
  //     const comment = commentInputElement.value;

  //     if (comment.length > 280) {
  //       alert("Comment is too long!");
  //     }
  
  //     book.comment = comment;
  //     console.log(bookData)
  //     renderNewBooks();
  //   });
  // });

  return li;
};

//#endregion STATE MANAGEMENT

//================================================
//#region RENDERING
//================================================

/**
 * `renderProperties` renders a property element for each property in propertyData, and re-renders the screen.
 */

const renderNewBooks = () => {
  const bookElements = bookData.map(createBookshelfElement);
  console.log(bookElements)
  bookshelfElement.replaceChildren(...bookElements);
};

/**
 * `addBtn` Event Listener creates and then adds a new property object to propertyData array when the addBtn is clicked, and then refreshes the page again.
 */

addBtn.addEventListener("click", () => {
  //const userInput = getProperty();

  const author = [bookAuthor.value];
  const language = bookLanguage.value;
  const subject = [bookSubject.value];
  const title = bookTitle.value;


  if (!title || !author || !language || !subject) {
    alert("Form incomplete. Please try again.");
    return;
  }
  //add new object to the propertyData array
  bookData.push({ author, language, subject, title });
  bookshelf.render()
  console.log(bookData)
});



/////////////////////////////////////////////





// From Friday 1-6-22

// //===========================
// //#region STATE
// //===========================

// /**
//  * Rough implementation of a React hook that maintains state
//  * @param {*} initial the initial value of teh state
//  * @returns [getter, setter]
//  */

// const useState = (initial) => {
//   //this is like `let bookshelf = bookData`, but we're putting it in a function; this way, you can't access the treasure chest directly, you can only use the keywords I gave you
//   let closure = initial;
//   const getState = () => closure;
//   const setState = (update) => (closure = update);
//   return [getState, setState];
// };

// //getBookshelf refers to the closure
// //setBookshelf updates the closure
// //we're using the function useState to remember bookData

// const [getBookshelf, setBookshelf] = useState(bookData);

// //#endregion State

// //===========================
// //#region RENDERING
// //===========================

// /////////////////////------RENDER BOOKSHELF-------/////////////////////
// const renderBookshelf = (bookshelf) => {
//   const ul = document.querySelector("ul");

//   //We want the same amount of things, we want to TRANSFORM the elements in the array to be html elements
//   const renderedBooks = bookshelf.map((book) => {
//     const bookInstance = new Book(book.title, book.author);
//     return bookInstance.render();
//   });

//   // we want to KEEP only the books that have been favorited
//   // use REDUCE to count the total number of favorite books, which is indicated by a DOM element
//   // just taking things out of the existing array

//   //Create html elements for fav book count and button to update fav book count.

//   const updateFavCountBtn = document.createElement("button");
//   updateFavCountBtn.classList.add("updateFavCountBtn");
//   updateFavCountBtn.textContent = "Update Favorite Count";

//   const favBookCount = document.createElement("span");
//   favBookCount.classList.add("favBookCount");
//   favBookCount.textContent = `${0}`;

// //   const countFavoriteBooks = () => {
// //     bookshelf.reduce((count, book) => (book.favorite ? count + 1 : count), 0);
// //   };

//   //Create event listener. When button is clicked, add book to fav books array and update the counter
//   updateFavCountBtn.addEventListener("click", () => {
//     favBookCount.textContent = bookshelf.reduce((count, book) => (book.favorite ? count + 1 : count), 0);
//   });

//   // //... is called the spread operator and it basically says here's everything inside the array
//   ul.replaceChildren(...renderedBooks);

//   ul.prepend(favBookCount, updateFavCountBtn);

//   return ul;
// };

// ///////////////////-------------RENDER APP----------------////////////////
// //Work backward: render app
// //Instead of classes, I'm making functions
// //Functional programming style
// //RenderApp takes an app and updates the page with the name and the bookshelf(rendered)

// // const renderApp = ({name, bookshelf}) => {
// const renderApp = (app) => {
//   const h1 = document.createElement("h1");
//   h1.textContent = app.name;
//   h1.classList.add("h1");

//   const ui = document.querySelector(".ui");

//   const renderedBookshelf = renderBookshelf(app.bookshelf);
//   //replaceChildren: so that whenever we update the bookshelf, we update the page
//   const main = document.querySelector("main");
//   main.replaceChildren(h1, ui, renderedBookshelf);
// };

// renderApp({
//   name: "Library for Learning",
//   bookshelf: getBookshelf(),
// });

// //#endregion RENDERING

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
