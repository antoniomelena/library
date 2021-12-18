// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZvpS0hT_I3tKfCtjXFhELP7By0uX3OI",
  authDomain: "library-edda7.firebaseapp.com",
  projectId: "library-edda7",
  storageBucket: "library-edda7.appspot.com",
  messagingSenderId: "417746204306",
  appId: "1:417746204306:web:cd3f03ffb0b3ca5cc9584b",
  measurementId: "G-7WVVX9BB4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

// Collection Reference
const colRef = collection(db, "books");

import "./style.css";

const addBookForm = document.querySelector(".add");
const addBookButton = document.getElementById("addBookButton");
const modal = document.querySelector(".modal");
// const books = [];

// Get Real Time Collection Data
onSnapshot(colRef, (snapshot) => {
  const books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  fillLibrary(books);
  // console.log("Books in snapshot", books);
});

// Adding Books
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    pages: parseInt(addBookForm.pages.value),
    read: addBookForm.read.value == "true" ? true : false,
  }).then(() => {
    addBookForm.reset();
    closeModal();
  });
});

// Delete Book
// const docReference = doc(
//   db,
//   "books"
//   id
// );
// deleteDoc(docReference);
// .then(() => {
//   deleteBookForm.reset()
// });

// class Book {
//   constructor(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//   }
// }

// Book.prototype.toggle = function () {
//   this.read = !this.read;
// };
// function resetGrid() {
//   booksTableBody.innerHTML = "";
//   console.log("grid reset");
// }

function fillLibrary(books) {
  // console.log("loaded");
  // resetGrid();
  // console.log("Books in fillLibrary", books);
  books.forEach((book) => {
    addRow(book);
    // console.log("hello");
    // console.log(book);
  });
}

// function addBookToLibrary(newBook) {
//   if (myLibrary.some((book) => book.title === newBook.title)) {
//     return false;
//   }
//   myLibrary.push(newBook);
//   return true;
// }

// const bookOne = new Book(
//   "The Girl With The Dragon Tattoo",
//   "Stieg Larsson",
//   416,
//   false
// );
// const bookTwo = new Book(
//   "The Picture of Dorian Gray",
//   "Oscar Wilde",
//   176,
//   true
// );
// const bookThree = new Book("A Little Life", "Hanya Yanagihara", 800, false);
// addBookToLibrary(bookOne);
// addBookToLibrary(bookTwo);
// addBookToLibrary(bookThree);

// OPEN MODAL
function openModal() {
  modal.style.display = "flex";
  document.body.classList.add("overflow-hidden");
}
addBookButton.addEventListener("click", openModal);

// CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("overflow-hidden");
}
document.querySelector(".close").addEventListener("click", closeModal);

// function populate() {
//   const selection = document.getElementById("select");
//   if (selection.value === "Yes") {
//     return true;
//   }
//   if (selection.value === "No") {
//     return false;
//   }
// }

// function getInputValue(e) {
//   e.preventDefault();

//   const titleInputVal = document.getElementById("title").value;
//   const authorInputVal = document.getElementById("author").value;
//   const pagesInputVal = document.getElementById("pages").value;
//   const readOrNot = populate();

//   const createdBook = new Book(
//     titleInputVal,
//     authorInputVal,
//     pagesInputVal,
//     readOrNot
//   );

//   const shouldAddOrNot = addBookToLibrary(createdBook);
//   if (shouldAddOrNot) {
//     addRow(createdBook);
//   }

//   clearFields();

//   closeModal();
// }

// modal.addEventListener("submit", getInputValue);

// function deleteBook(el) {
//   if (el.classList.contains("deleteButton")) {
//     el.parentElement.remove();
//   }
// }

// function addRow(book) {
//   const tableRow = document.createElement("tr");
//   const bookButtons = document.createElement("div");
//   const title = document.createElement("td");
//   const author = document.createElement("td");
//   const pages = document.createElement("td");
//   // const readButton = document.createElement("button");
//   // const deleteButton = document.createElement("button");

//   tableRow.classList.add("book-card");
//   bookButtons.classList.add("book-buttons");
//   title.classList.add("book-title");
//   author.classList.add("book-text");
//   pages.classList.add("book-text");
//   // readButton.classList.add("button");
//   // deleteButton.classList.add("button");
//   // deleteButton.classList.add("deleteButton");

//   title.textContent = book.title;
//   author.textContent = `by ${book.author}`;
//   pages.textContent = `${book.pages} pages`;
//   // deleteButton.textContent = "Delete";
//   // readButton.style.width = "1fr";
//   // if (book.read) {
//   //   readButton.textContent = "Read";
//   //   readButton.classList.add("read-button");
//   // } else {
//   //   readButton.textContent = "Not Read";
//   //   readButton.classList.add("not-read-button");
//   // }

//   tableRow.appendChild(title);
//   tableRow.appendChild(author);
//   tableRow.appendChild(pages);
//   console.log(tableRow);
//   console.log(booksTableBody);
//   // booksTableBody.appendChild(tableRow);
//   // bookButtons.appendChild(readButton);
//   // bookButtons.appendChild(deleteButton);
//   // bookCard.appendChild(bookButtons);

//   // deleteButton.addEventListener("click", (e) => {
//   //   deleteBook(e.target);
//   // });

//   // readButton.addEventListener("click", () => {
//   //   book.toggle();
//   //   fillLibrary();
//   // });
// }
function addRow(book) {
  // const booksTable = document.querySelector(".table");
  const booksTableBody = document.querySelector(".table-body");
  const newRow = booksTableBody.insertRow(-1);

  let titleCell = newRow.insertCell(-1);
  let titleCellText = document.createTextNode(book.title);
  titleCell.appendChild(titleCellText);

  let authorCell = newRow.insertCell(-1);
  let authorCellText = document.createTextNode(book.author);
  authorCell.appendChild(authorCellText);

  let pagesCell = newRow.insertCell(-1);
  let pagesCellText = document.createTextNode(book.pages);
  pagesCell.appendChild(pagesCellText);

  let deleteCell = newRow.insertCell(-1);
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("button");
  deleteButton.classList.add("button--danger");
  let deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  deleteCell.appendChild(deleteButton);
}
