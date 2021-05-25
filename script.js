const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const bookOne = new Book("The Song Of Achilles", "Madeline Miller", 416);
const bookTwo = new Book("The Picture of Dorian Gray", "Oscar Wilde", 176);
const bookFour = new Book("A Little Life", "Hanya Yanagihara", 800);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookFour);
