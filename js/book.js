/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 * @param {boolean} favorite user's opinion about the book
 * @param {string []} comments array of comments about the book
 */
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;
  this.comments = [];

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
  };

  /**
   * @returns a list item representing this Book
   */
  this.render = function () {
    /* NOTE: Change render! This is currently a barebones template. */
    // Create a DOM element that represents a list item
    const li = document.createElement("li");
    // Give the new element a class name
    li.classList.add("book");
    // Append the item with this book's title
    li.textContent = `${this.title} by ${this.getAuthorNames()}`;


    //------------------------------------------------------
    // Create favorite button
    // Create a DOM favorite Button element
    const favButton = document.createElement("button");
    // Add text to the button
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    // Append the button to the DOM list element we just created
    li.append(favButton);

    // Toggle favorite property on click
    // Add an event listener to the fav button. If the isFavorite property is true, return the new button setting.
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });


    //------------------------------------------------------
    //Comment button

    const commentBtn = document.createElement("button");
    commentBtn.textContent = "Comment";

    const commentContainer = document.createElement("div");
    commentContainer.append(commentBtn);
    li.append(commentContainer);

    // Add an event listener to the comment button
    commentBtn.addEventListener("click", () => {
      //reveals a text input element
      const commentInputElement = document.createElement("input");
      commentInputElement.placeholder = "Comment";
      commentInputElement.classList.add("commentInput");
      commentInputElement.maxLength = 280;
      commentContainer.append(commentInputElement);

      //and a "send button"
      const sendBtn = document.createElement("button");
      sendBtn.textContent = ">";
      commentContainer.append(sendBtn);

      sendBtn.addEventListener("click", () => {
        //create new comment property to add to comments array in book object
        const userInput = commentInputElement.value;

        if (userInput.length > 280) {
          alert("Input is too long!");
        }
        this.comments.push(userInput);
        console.log(bookshelf);

        const comment = document.createElement("p")
        comment.textContent = userInput;
        commentContainer.append(comment)
      });
    });

    

    // Return the list element
    return li;
  };
}
