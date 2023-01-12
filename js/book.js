/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 * @param {boolean} favorite user's opinion about the book
 * @param {string []} comments array of comments about the book
 */

function Book(authors, language, subject, title, comments) {
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
    // Create a DOM element that represents a list item
    const li = document.createElement("li");
    // Give the new element a class name
    li.classList.add("book");
    // Append the item with this book's title
    li.textContent = `${this.title} by ${this.getAuthorNames()}`;

    //------------------------------------------------------
    // Create favorite button

    // Create a DOM favorite button element
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
    // Remove button

    // Create a DOM remove button element
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";

    // Add an event listener to the remove button. When clicked, call the remove book method from the Bookshelf funciton.
    removeBtn.addEventListener("click", () => {
      bookshelf.removeBook();
    });

    li.prepend(removeBtn);

    //------------------------------------------------------
    //Comment button

    //Create a DOM elements for a comment container
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("commentContainer");
    li.append(commentContainer);

    // Create and append a comment button to the container
    const commentBtn = document.createElement("button");
    commentBtn.textContent = "Comment";
    li.append(commentBtn);

    // Add an event listener to the comment button
    commentBtn.addEventListener("click", () => {
      // When clicked, it reveals a text input element
      const commentInputElement = document.createElement("input");
      commentInputElement.placeholder = "Comment";
      commentInputElement.classList.add("commentInputBox");
      commentInputElement.maxLength = 280;
      commentContainer.append(commentInputElement);

      // Create and append a "send" button
      const sendBtn = document.createElement("button");
      sendBtn.textContent = ">";
      commentContainer.append(sendBtn);

      // Add an event listener to the "send" button
      sendBtn.addEventListener("click", () => {
        // Store the user's input in a variable
        const userInput = commentInputElement.value;

        if (userInput.length > 280) {
          alert("Input is too long!");
        }

        this.comments.push(userInput);
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.textContent = userInput;
        commentContainer.append(comment);
        this.render();
      });
    });
    // NOTE: Comment persistence
    // Check if this Book's comments property is empty. If not, append this Book's comments to the comment container.
    if (this.comments.length > 0) {
      commentContainer.append(this.comments);
    }
    // Return the list element
    return li;
  };
}
