/**
 * Bookshelf is an internal data structure
 * that manages Books. Bookshelf is a constructor function.
 * @param {HTMLElement} htmlElement the element to render to
 * @param {Book[]} books an optional array of Books
 */

// A constructor function accepts arguments, but does not RETURN anything. 
// It uses `this` to define properties and methods. We use the `new` keyword to use this function.
// It takes parameters in the same way a class does, through its constructor.

function Bookshelf(htmlElement, books = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;

  /**
   * Process an array of raw book information
   * to initialize Bookshelf properties
   * @param {{author: string[], language: string, subject: string[], title: string}[]} data an array of book data
   */
  this.seed = function (data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.render();
  };

  /**
   * Add a book to the Bookshelf
   * @param {Book} book
   */
  this.addBook = function (book) {
    this.books.push(book);
  };

  /**
   * Remove a book according to it's position in the Bookshelf.
   */
  this.removeBook = function (book) {
    const idx = this.books[book];
    this.books.splice(idx, 1);
    this.render();
  };

  /**
   * Use internal Book array to rerender the
   * existing DOM element for this Bookshelf.
   */
  this.render = function (book) {
    /* NOTE: Change render! This is currently a barebones template. */
    // Create a DOM element for an unordered list
    const ul = document.createElement("ul");
    // Call map method on the visibleBooks
    const books = this.visibleBooks.map((b) => b.render());

    // Replaced children of ul element with the books array
    ul.replaceChildren(...books);
    // Render the ul element to an html element
    this.htmlElement.replaceChildren(ul);
  };

  /**
   * Count the number of favorite books
   * @returns the number of favorite books
   */
  this.countFavoriteBooks = function () {
    // Use reduce to count the books for which the isFavorite property is true. Return the count.
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  };

  /**
   * Filter visible books according to a given criteria function
   * @param {(book: Book) => boolean} criteria
   */
  this.filterVisibleBooks = function (criteria) {
    // Call filter method on books arrray, to filter visible books according to a certain criteria
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  /**
   * Sort visible books according to a given compare function
   * @param {(a: Book, b: Book) => number} compareFn
   */
  this.sortVisibleBooks = function (compareFn) {
    // Call sort method on books array, to sort visible books according to a certain compare function
    this.visibleBooks.sort(compareFn);
    this.render();
  };

  /**
   * Create new book based on user input
   * @param {(Book)} book
   */
  this.createNewBook = function (book) {
    const newBook = new Book(
      (author = bookAuthor.value),
      (language = bookLanguage.value),
      (subject = bookSubject.value),
      (title = bookTitle.value)
    );
    this.addBook(newBook);
    this.render();
  };
}
