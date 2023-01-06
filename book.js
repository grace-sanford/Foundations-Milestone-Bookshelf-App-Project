class Book {
    constructor(title, author, favorite) {
        this.title = title;
        this.author = author;
        this.favorite = false;
    }

    render() {
        const li = document.createElement("li");
        li.textContent = `${this.title} by ${this.author}`;
        li.classList.add("book")

        //FAVORITE BUTTON / EVENT LISTENER GOES HERE
        //     //When the button is clicked, the book is added to a list of user's favorite books (maintained by bookshelf)

        const favBtn = document.createElement("button");
        favBtn.textContent = "*"
        // // favBtn.addEventListener("click")

        li.prepend(favBtn);

    return li;
    }
};