// (2).

/**
 * create your box object that contains books objects, ensure that you can
 * count # of books inside box
 * delete any of these books in box according to book title.
 * create book object and add it to box object content property
 * Note:
 *    there is no inheritance
 *    using of global variables, Class methods and properties isn’t allowed.
 *    box object has the following properties: height, width, length, numOfBooks, volume, material, content.
 *    The content property contains an array books
 *    book object has the following properties: title, numofChapters, author, numofPages, publisher, numofCopies
 *    you can define any function needed for both box and book objects
 */

function Box(height, width, length, volume, material, content) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.volume = volume;
  this.material = material;
  this.content = content || [];
  this.numberOfBooks = this.content.length;

  let getBookIndex = function (books, bookTitle) {
    let isExist = false;
    for (let i = 0; i < books.length; i++) {
      if (books[i].title === bookTitle) return i;
    }
    return -1;
  };

  this.addBook = function (book) {
    // Check if the Book already Exist or Not
    let bookIndex = getBookIndex(this.content, book.title);
    if (bookIndex !== -1) {
      // If yes ==> Increase the Book number of Copies  ==> Do not Re-Add it to the Content
      this.content[bookIndex].numberOfCopies += book.numberOfCopies;
    }
    // Else ==> Add the Book to the Content
    else {
      this.content.push(book);
    }
    this.numberOfBooks += book.numberOfCopies; // Increase the Number of Books ANYWAY
  };

  this.removeBook = function (bookTitle) {
    // Check if there Books first or Not
    if (this.content.length === 0) throw Error("There is no Books");
    // Check if the Book Exist or Not first
    let bookIndex = getBookIndex(this.content, bookTitle);
    // If yes remove it
    if (bookIndex !== -1) {
      // Check if there Multiple Copies of the Book
      if (this.content[bookIndex].numberOfCopies > 1) {
        this.content[bookIndex].numberOfCopies--;
      } else {
        this.content.splice(bookIndex, 1);
      }
      this.numberOfBooks--; // Decrease the Number of Books ANYWAY
    }
    // Else throw Error
    else {
      throw Error("Book (" + bookTitle + ") is not found!");
    }
  };

  this.displayBooks = function () {
    console.log(
      "%cBox Content:",
      "color: #F7D426; font-size: 20px; font-weight: bold;"
    );
    for (let i = 0; i < this.content.length; i++) {
      console.log(
        "Book Title: " +
          this.content[i].title +
          ", Author: " +
          this.content[i].author +
          ", Number of Copies: " +
          this.content[i].numberOfCopies
      );
    }
  };
}

function Book(
  title,
  numberOfChapters,
  author,
  numberOfPages,
  publisher,
  numberOfCopies
) {
  this.title = title;
  this.numberOfChapters = numberOfChapters;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publisher = publisher;
  this.numberOfCopies = numberOfCopies;
}

let mainBox = new Box(10, 10, 10, 1000, "A BIIIG Box");
let book1 = new Book(
  "Surrounded By Idiots",
  5,
  "Thomas Erikson",
  200,
  "St. Martin's Essentials",
  1
);

let book2 = new Book(
  "Animal Farm",
  8,
  "George Orwell",
  450,
  "Secker & Warburg",
  1
);

mainBox.addBook(book1);
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();

console.log(
  "%c===================================================================",
  "color: #FF426E"
);

mainBox.addBook(book1);
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();

console.log(
  "%c===================================================================",
  "color: #FF426E"
);

mainBox.addBook(book2);
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();

console.log(
  "%c===================================================================",
  "color: #FF426E"
);

mainBox.removeBook("Surrounded By Idiots");
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();

console.log(
  "%c===================================================================",
  "color: #FF426E"
);

mainBox.removeBook("Surrounded By Idiots");
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();

console.log(
  "%c===================================================================",
  "color: #FF426E"
);

// mainBox.removeBook("Surrounded By Idiots");
console.log("Current Number of Books: " + mainBox.numberOfBooks);
mainBox.displayBooks();
