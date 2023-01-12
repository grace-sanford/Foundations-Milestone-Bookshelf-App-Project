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
//#region Add books
// --------------------------

//Select DOM elements
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookLanguage = document.querySelector(".language");
const bookSubject = document.querySelector(".subject");

const addBtn = document.querySelector(".addBtn");

/**
 * `addBtn` Event Listener creates and then adds a new property object to propertyData array when the addBtn is clicked, and then refreshes the page again.
 */

addBtn.addEventListener("click", () => {
  if (!bookTitle.value || !bookAuthor.value || !bookLanguage.value || !bookSubject.value) {
    alert("Form incomplete. Please try again.");
    return;
  }
  bookshelf.createNewBook();
});

//#endregion Add books

// --------------------------
//#region Remove books
// --------------------------

// const removeBtn = document.querySelector(".removeBtn")




//#endregion Remove books

// //Select DOM elements
// const bookTitle = document.querySelector(".title");
// const bookAuthor = document.querySelector(".author");
// const bookLanguage = document.querySelector(".language");
// const bookSubject = document.querySelector(".subject");

// const addBtn = document.querySelector(".addBtn");
// // const bookshelfElement = document.querySelector(".books");

// /**
//  * `createPropertyElement takes an object representing the user's input and an index and returns a correspoing html element.
//  */

// const createBookshelfElement = (property, i) => {
//   // //Create li list element
//   // const li = document.createElement("li");
//   // li.classList.add("book");

//   // //Create a link with the name
//   // const book = document.createElement("a");
//   // book.textContent = `${book.title}:`
//   // li.append(book);

//   // //Remove btn

//   // const removeBtn = document.createElement("button");
//   // removeBtn.textContent = "-";
//   // removeBtn.addEventListener("click", () => {
//   //   //Remove link and re-render
//   //   propertyData.splice(i, 1);
//   //   bookshelf();
//   // });
//   // li.prepend(removeBtn);

//   // //Comment button

//   // const commentBtn = document.createElement("button");
//   // commentBtn.textContent = "Comment";

//   // const commentContainer = document.createElement("div");
//   // commentContainer.append(commentBtn);
//   // li.append(commentContainer);

//   // // Add an event listener to the comment button
//   // commentBtn.addEventListener("click", () => {
//   //   //reveals a text input element
//   //   const commentInputElement = document.createElement("input");
//   //   commentInputElement.placeholder = "Comment";
//   //   commentInputElement.classList.add("commentInput");
//   //   commentInputElement.maxLength = 280;
//   //   commentContainer.append(commentInputElement);

//   //   //and a "send button"
//   //   const sendBtn = document.createElement("button");
//   //   sendBtn.textContent = ">";
//   //   commentContainer.append(sendBtn);

//   //   sendBtn.addEventListener("click", () => {
//   //     //create new property to add to property objects in array
//   //     const comment = commentInputElement.value;

//   //     if (comment.length > 280) {
//   //       alert("Comment is too long!");
//   //     }

//   //     book.comment = comment;
//   //     console.log(bookData)
//   //     renderNewBooks();
//   //   });
//   // });

//   return li;
// };

// //#endregion STATE MANAGEMENT

// //================================================
// //#region RENDERING
// //================================================

// /**
//  * `renderProperties` renders a property element for each property in propertyData, and re-renders the screen.
//  */

// const renderNewBooks = () => {
//   const bookElements = bookData.map(createBookshelfElement);
//   console.log(bookElements)
//   bookshelfElement.replaceChildren(...bookElements);
// };
