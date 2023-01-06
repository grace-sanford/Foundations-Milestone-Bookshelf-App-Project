# Foundations.Assessment.BookshelfSorting


General Code

    Bookshelf is refactored so that map is used to generate DOM elements from the array of books. check
    Design choices are explained and documented in comments. 
    DOM elements are styled via CSS. check

Favorite Feature

    The Book class contains a way to keep track of whether or not a Book instance is a Favorite. check
        Each Book renders a "Favorite" button that indicates whether or not it is a Favorite. check
        Clicking the button toggles this property. check
    Bookshelf has a function that uses reduce to count the total number of favorite books, which is indicated by a DOM element.
        This does not have to be "real-time". You can use an "Update Favorite Count" button, which is much simpler.

Searching and Sorting

    The UI contains a "Search" text input and a "Search" button. When the user clicks the button, only books with either an author, title, or topic that matches the user's query should remain visible on the page. This is done using filter.
    The UI contains a "Sort by" drop-down menu that contains the following options. There should also be a way to toggle whether the sort is ascending or descending. This is done using sort.
        Sort alphabetically (A-Z) by title or author.
        Sort by the number of topics.
