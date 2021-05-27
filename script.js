const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("pages");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const bookOne = new Book("The Song Of Achilles", "Madeline Miller", 416, false);
const bookTwo = new Book(
  "The Picture of Dorian Gray",
  "Oscar Wilde",
  176,
  true
);
const bookFour = new Book("A Little Life", "Hanya Yanagihara", 800, false);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookFour);

function fillTable(data) {
  let table = document.getElementById("libraryTable");

  for (const book of data) {
    const row = `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                </tr>`;
    table.innerHTML += row;
  }
}

fillTable(myLibrary);

document.querySelector(".button").addEventListener("click", fillTable());

document.getElementById("bookButton").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "none";
});
