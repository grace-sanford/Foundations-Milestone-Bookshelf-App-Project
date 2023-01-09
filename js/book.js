/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;

  /**
   * * `getAuthorName()` takes an array containing the author's last name followed by a comma, followed by the author's first name.
   * @param {array} this.authors the given array
   * @returns {string} a string of the author's first name, a space, and the 
   * author's last name
   */

  this.getAuthorNames = function () {
    let names = "";
    //write a loop that interates through the given array of stings (this.author) and stores each string in a variable
    for (let i = 0; i <= this.authors.length - 1; i++) {
      let name = this.authors[i];
      if (name.indexOf(" ") >= 0) {
        let last = name.slice(0, name.indexOf(","));
        let first = name.slice(name.indexOf(" "));
        names += `${first} ${last}`;
      } else {
        names += `${name}`;
      }
    }
    return names;
  }

  /**
   * @returns a list item representing this Book
   */
  this.render = function () {
    /* NOTE: Change render! This is currently a barebones template. */
    // Create a DOM element that represents a list item
    const li = document.createElement("li");
    // Give the new element a class name
    li.classList.add("book")
    // Append the item with this book's title
    li.textContent = `${this.title} by ${this.getAuthorNames()}`;

    // Create favorite button
    // Create a DOM favorite Button element
    const favButton = document.createElement("button");
    // Add text to the button
    favButton.textContent = this.isFavorite ? "*" : "-";
    // Append the button to the DOM list element we just created
    li.append(favButton);

    // Toggle favorite property on click
    // Add an event listener to the fav button. If the isFavorite property is true, return the new button setting.
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "*" : "-";
    });

    // Return the list element
    return li;
  };
}



// From Friday 1-6-22

// /**
//  *  Book class maintains properties found in the data.
//  */

// class Book {
//   constructor(title, author, favorite) {
//     this.title = title;
//     this.author = author;
//     this.favorite = false;
//   }

//   /**
//    * `getAuthorName()` takes an array containing the author's last name followed by a comma,
//    * followed by the author's first name.
//    * @param {array} this.author the given array
//    * @returns {string} a string of the author's first name, a space, and the author's last name
//    */

//   getAuthorNames() {
//     let names = "";
//     //write a loop that interates through the given array of stings (this.author) and stores each string in a variable
//     for (let i = 0; i <= this.author.length - 1; i++) {
//       let name = this.author[i];
//       if (name.indexOf(" ") >= 0) {
//         let last = name.slice(0, name.indexOf(","));
//         let first = name.slice(name.indexOf(" "));
//         names += `${first} ${last}`;
//       } else {
//         names += `${name}`;
//       }
//     }
//     return names;
//   }

  
//   /**
//    * `getFavBook` toogles the favorite property from false (default) to true.
//    */
//   getFavBook() {
//     return (this.favorite = true);
//   }

//   render() {
//     const li = document.createElement("li");
//     li.innerText = `${this.title} by ${this.getAuthorNames()}`;
//     li.classList.add("book");

//     //create more info section >> to be appended upon event click
//     const favBook = document.createElement("span");
//     favBook.classList.add(".fav");
//     favBook.textContent = `Favorite!`;
//     favBook.style.backgroundColor = "red";

//     //FAVORITE BUTTON / EVENT LISTENER GOES HERE
//     //When the button is clicked, the favorite property gets toggled.

//     const favBtn = document.createElement("button");
//     favBtn.textContent = "*";
//     favBtn.addEventListener("click", () => {  
//       const bookshelf = getBookshelf();
//       const updatedBookshelf = () => this.favorite = true;
//       setBookshelf(updatedBookshelf);
//       //add the image and the description to the book element container
//       li.append(favBook);

//       renderApp({
//         name: "Library for Learning",
//         bookshelf: getBookshelf(),
//       });
//     });

//     li.prepend(favBtn);

//     return li;
//   }
// }
