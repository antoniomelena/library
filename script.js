const addBook = document.getElementById("addBookButton");
const popUp = document.querySelector(".bg-modal");

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
  }
}

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

function openModal() {
  // form.reset();
  popUp.style.display = "flex";
}

addBook.addEventListener("click", openModal);

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "none";
});

const inputs = document.querySelectorAll("input");
const booksGrid = document.querySelector(".books-grid");

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const pages = document.createElement("h3");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-text");
  author.classList.add("book-text");
  pages.classList.add("book-text");
  readButton.classList.add("button");
  removeButton.classList.add("button");
  removeButton.classList.add("button--red");

  title.textContent = book.title;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  removeButton.textContent = "Delete";
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
  bookCard.appendChild(removeButton);

  inputs.forEach((input) => (input.value = ""));
}

function fillLibrary(library) {
  for (const bookIdx in library) {
    createBookCard(library[bookIdx]);
  }
}

fillLibrary(myLibrary);

function getInputValue() {
  const titleInputVal = document.getElementById("title").value;
  const authorInputVal = document.getElementById("author").value;
  const pagesInputVal = document.getElementById("pages").value;

  let createdBook = new Book(titleInputVal, authorInputVal, pagesInputVal);

  createBookCard(createdBook);
}

document
  .getElementById("submitButton")
  .addEventListener("click", getInputValue);
