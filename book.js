/**
 *  Book class maintains properties found in the data.
 */

class Book {
  constructor(title, author, favorite) {
    this.title = title;
    this.author = author;
    this.favorite = false;
  }

  /**
   * `getAuthorName()` takes an array containing the author's last name followed by a comma,
   * followed by the author's first name.
   * @param {array} this.author the given array
   * @returns {string} a string of the author's first name, a space, and the author's last name
   */

  getAuthorNames() {
    let names = "";
    //write a loop that interates through the given array of stings (this.author) and stores each string in a variable
    for (let i = 0; i <= this.author.length - 1; i++) {
      let name = this.author[i];
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
   * `getFavBook` toogles the favorite property from false (default) to true.
   */
  getFavBook() {
    return (this.favorite = true);
  }

  render() {
    const li = document.createElement("li");
    li.innerText = `${this.title} by ${this.getAuthorNames()}`;
    li.classList.add("book");

    //create more info section >> to be appended upon event click
    const favBook = document.createElement("span");
    favBook.classList.add(".fav");
    favBook.textContent = `Staff pick!`;
    favBook.style.backgroundColor = "red";

    //FAVORITE BUTTON / EVENT LISTENER GOES HERE
    //When the button is clicked, the favorite property gets toggled.

    const favBtn = document.createElement("button");
    favBtn.textContent = "*";
    favBtn.addEventListener("click", () => {  
      const bookshelf = getBookshelf();
      const updatedBookshelf = () => this.favorite = true;
      setBookshelf(updatedBookshelf);
      //add the image and the description to the book element container
      li.append(favBook);

      renderApp({
        name: "Library for Learning",
        bookshelf: getBookshelf(),
      });
    });

    li.prepend(favBtn);

    return li;
  }
}
