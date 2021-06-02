const addBook = document.getElementById("addBookButton");
const popUp = document.querySelector(".bg-modal");
const inputs = document.querySelectorAll("input");
const booksGrid = document.querySelector(".books-grid");
const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

Book.prototype.show = function () {
  this.read = !this.read;
};

// class UI {
//   static fillLibrary() {
//     const storedBooks = [
//       {
//         title: "The Song Of Achilles",
//         author: "Madeline Miller",
//         pages: 416,
//         read: false,
//       },
//       {
//         title: "The Picture of Dorian Gray",
//         author: "Oscar Wilde",
//         pages: 176,
//         read: true,
//       },
//     ];

//     const books = storedBooks;

//     books.forEach((book) => UI.createBookCard(book));
//   }

//   static createBookCard(book) {
//     const bookCard = document.createElement("div");
//     const title = document.createElement("h2");
//     const author = document.createElement("h3");
//     const pages = document.createElement("h3");
//     const readButton = document.createElement("button");
//     const deleteButton = document.createElement("button");

//     bookCard.classList.add("book-card");
//     title.classList.add("book-text");
//     author.classList.add("book-text");
//     pages.classList.add("book-text");
//     readButton.classList.add("button");
//     deleteButton.classList.add("button");
//     deleteButton.classList.add("deleteButton");

//     title.textContent = book.title;
//     author.textContent = `by ${book.author}`;
//     pages.textContent = `${book.pages} pages`;
//     deleteButton.textContent = "Delete";
//     readButton.style.width = "1fr";
//     if (document.getElementById("is-read").checked || book.read) {
//       readButton.textContent = "Read";
//       readButton.classList.add("read-button");
//     } else {
//       readButton.textContent = "Not Read";
//       readButton.classList.add("not-read-button");
//     }

//     booksGrid.appendChild(bookCard);
//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(pages);
//     bookCard.appendChild(readButton);
//     bookCard.appendChild(deleteButton);

//     // add toggle ability to each book 'read' button on click
//     // readButton.addEventListener("click", () => {
//     //   console.log("hello" + this);
//     //   book.read = !book.read;
//     //   // UI.fillLibrary();
//     // });
//   }

//   static deleteBook(el) {
//     if (el.classList.contains("deleteButton")) {
//       el.parentElement.remove();
//     }
//   }

//   static readBookToggle(el) {
//     if (el.classList.contains("readButton")) {
//       console.log("hello");
//     }
//   }

//   static clearFields() {
//     inputs.forEach((input) => (input.value = ""));
//   }
// }

function fillLibrary() {
  const books = myLibrary;

  books.forEach((book) => createBookCard(book));
}

document.addEventListener("DOMContentLoaded", fillLibrary);

function addBookToLibrary(newBook) {
  if (myLibrary.some((book) => book.title === newBook.title)) {
    return false;
  }
  myLibrary.push(newBook);
  return true;
}

const bookOne = new Book("The Song Of Achilles", "Madeline Miller", 416);
const bookTwo = new Book("The Picture of Dorian Gray", "Oscar Wilde", 176);
const bookThree = new Book("A Little Life", "Hanya Yanagihara", 800);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

// OPEN MODAL
function openModal() {
  popUp.style.display = "flex";
}

addBook.addEventListener("click", openModal);

// CLOSE MODAL
function closeModal() {
  popUp.style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);

function clearFields() {
  inputs.forEach((input) => (input.value = ""));
}

function getInputValue(e) {
  e.preventDefault();

  const titleInputVal = document.getElementById("title").value;
  const authorInputVal = document.getElementById("author").value;
  const pagesInputVal = document.getElementById("pages").value;

  const createdBook = new Book(titleInputVal, authorInputVal, pagesInputVal);

  // addBookToLibrary(createdBook);
  createBookCard(createdBook);

  clearFields();

  closeModal();
}

popUp.addEventListener("submit", getInputValue);

function deleteBook(el) {
  if (el.classList.contains("deleteButton")) {
    el.parentElement.remove();
  }
}

// Event: Remove Book
booksGrid.addEventListener("click", (e) => {
  console.log(e.target);
  deleteBook(e.target);
});

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const readButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-text");
  author.classList.add("book-text");
  pages.classList.add("book-text");
  readButton.classList.add("button");
  deleteButton.classList.add("button");
  deleteButton.classList.add("deleteButton");

  title.textContent = book.title;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  deleteButton.textContent = "Delete";
  readButton.style.width = "1fr";
  // if (book.read) {
  readButton.textContent = "Read";
  readButton.classList.add("read-button");
  // } else {
  //   readButton.textContent = "Not Read";
  //   readButton.classList.add("not-read-button");
  // }

  booksGrid.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readButton);
  bookCard.appendChild(deleteButton);

  clearFields();
}

// function selectedTest() {
//   let rIndex,
//     table = document.querySelector(".books-grid");
//   for (let i = 0; i < table.childElementCount; i += 1) {
//     table.childNodes[i].onclick = function () {
//       // rIndex = this.rowIndex;
//     };
//   }
// }

// function deleteCard() {
//   let table = document.querySelector(".books-grid");
//   table.removeChild(table.childNodes[2]);
// }

// function fillLibrary(library) {
//   // for (let i = 0; i < library.length; i += 1) {
//   //   createBookCard(library[i]);
//   // }
//   library.forEach((book) => createBookCard(book));
// }
