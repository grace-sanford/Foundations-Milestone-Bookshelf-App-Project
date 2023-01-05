# Foundations.Assessment.BookshelfSorting

General Code

    Bookshelf is refactored so that map is used to generate DOM elements from the array of books.
    Design choices are explained and documented in comments.
    DOM elements are styled via CSS.

Favorite Feature

    Each book has a "Favorite" button that will add the selected book to a maintained list of the user's favorite books. This list should be maintained by Bookshelf.
    The Book class contains a way to keep track of whether or not a Book instance is a Favorite.
    The UI contains elements that indicate whether or not a book is a Favorite.
    You use reduce to count the total number of favorite books, which is indicated by a DOM element.

Sorting

    The UI contains a "Search" text input and a "Search" button. When the user clicks the button, only books with either an author, title, or topic that matches the user's query should remain visible on the page. This is done using filter.
    The UI contains a "Sort by" drop-down menu that contains the following options. There should also be a way to toggle whether the sort is ascending or descending. This is done using sort.
        Sort alphabetically (A-Z) by title or author.
        Sort by the number of topics.