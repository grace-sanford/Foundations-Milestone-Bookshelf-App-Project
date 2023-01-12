// --------------------------
//#region Initialization
// --------------------------

// Select the unordered list portion of the page
const bookshelfElement = document.querySelector(".books");
// Store an instance of the Bookshelf function in a variable
const bookshelf = new Bookshelf(bookshelfElement);


// Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is provided to a database when it is being installed. It is especially useful when we want to populate the database with data we want to develop in future.
// So our goal is to “feed” the database with dummy data on its initialization. This can be very helpful especially during the development process or for onboarding new employees that run the development environment (database) locally on their machine.
bookshelf.seed(bookData);

//#endregion Initialization

// --------------------------
//#region Favorite Feature
// --------------------------

// Create DOM elements 
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

// Add an event listener to the update button so that when it's clicked, the function countFavoriteBooks is called on bookshelf and added to the DOM
updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
// Create DOM elements 
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
// Add an event listener to the search button, so when it's clicked, it filters the visible books based on title.
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);

  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
// Create DOM elements
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

//Add an event listener to the add button. When clicked, create a new book by calling the Book function, and render the new book on the page.
addBtn.addEventListener("click", () => {
  if (
    !bookTitle.value ||
    !bookAuthor.value ||
    !bookLanguage.value ||
    !bookSubject.value
  ) {
    alert("Form incomplete. Please try again.");
    return;
  }
  bookshelf.createNewBook();
});

//#endregion Add books
