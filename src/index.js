import "./style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
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

const addBookForm = document.querySelector(".add");
const addBookButton = document.getElementById("addBookButton");
const modal = document.querySelector(".modal");
// const books = [];

// Get Real Time Collection Data
onSnapshot(colRef, (snapshot) => {
  const books = [];
  snapshot.docs.forEach((x) => {
    books.push({ ...x.data(), id: x.id });
  });
  fillLibrary(books);
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
  document.querySelector(".table-body").innerHTML = "";

  books.forEach((book) => {
    addRow(book);
  });
}

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

  let readCell = newRow.insertCell(-1);
  let readButton = document.createElement("button");
  readButton.classList.add("button");
  readButton.classList.add("button--success");
  let readButtonText = document.createTextNode("Read");
  readButton.appendChild(readButtonText);
  readCell.appendChild(readButton);

  let deleteCell = newRow.insertCell(-1);
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("button");
  deleteButton.classList.add("button--danger");
  let deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  deleteCell.appendChild(deleteButton);

  deleteButton.setAttribute("id", book.id);
  deleteButton.addEventListener("click", (event) => {
    const docRef = doc(db, "books", event.target.id);
    deleteDoc(docRef);
  });
}
