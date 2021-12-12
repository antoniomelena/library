/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const addBook = document.getElementById(\"addBookButton\");\nconst popUp = document.querySelector(\".bg-modal\");\nconst inputs = document.querySelectorAll(\"input\");\nconst booksGrid = document.querySelector(\".books-grid\");\nconst myLibrary = [];\n\nclass Book {\n  constructor(title, author, pages, read) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.read = read;\n  }\n}\n\nBook.prototype.toggle = function () {\n  this.read = !this.read;\n};\n\nfunction fillLibrary() {\n  resetGrid();\n  const books = myLibrary;\n\n  books.forEach((book) => createBookCard(book));\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", fillLibrary);\n\nfunction addBookToLibrary(newBook) {\n  if (myLibrary.some((book) => book.title === newBook.title)) {\n    return false;\n  }\n  myLibrary.push(newBook);\n  return true;\n}\n\nconst bookOne = new Book(\n  \"The Girl With The Dragon Tattoo\",\n  \"Stieg Larsson\",\n  416,\n  false\n);\nconst bookTwo = new Book(\n  \"The Picture of Dorian Gray\",\n  \"Oscar Wilde\",\n  176,\n  true\n);\nconst bookThree = new Book(\"A Little Life\", \"Hanya Yanagihara\", 800, false);\naddBookToLibrary(bookOne);\naddBookToLibrary(bookTwo);\naddBookToLibrary(bookThree);\n\n// OPEN MODAL\nfunction openModal() {\n  popUp.style.display = \"flex\";\n}\n\naddBook.addEventListener(\"click\", openModal);\n\n// CLOSE MODAL\nfunction closeModal() {\n  popUp.style.display = \"none\";\n}\n\ndocument.querySelector(\".close\").addEventListener(\"click\", closeModal);\n\nfunction clearFields() {\n  inputs.forEach((input) => (input.value = \"\"));\n}\n\nfunction populate() {\n  const selection = document.getElementById(\"select\");\n  if (selection.value === \"Yes\") {\n    return true;\n  }\n  if (selection.value === \"No\") {\n    return false;\n  }\n}\n\nfunction getInputValue(e) {\n  e.preventDefault();\n\n  const titleInputVal = document.getElementById(\"title\").value;\n  const authorInputVal = document.getElementById(\"author\").value;\n  const pagesInputVal = document.getElementById(\"pages\").value;\n  const readOrNot = populate();\n\n  const createdBook = new Book(\n    titleInputVal,\n    authorInputVal,\n    pagesInputVal,\n    readOrNot\n  );\n\n  const shouldAddOrNot = addBookToLibrary(createdBook);\n  if (shouldAddOrNot) {\n    createBookCard(createdBook);\n  }\n\n  clearFields();\n\n  closeModal();\n}\n\npopUp.addEventListener(\"submit\", getInputValue);\n\nfunction deleteBook(el) {\n  if (el.classList.contains(\"deleteButton\")) {\n    el.parentElement.remove();\n  }\n}\n\nfunction createBookCard(book) {\n  const bookCard = document.createElement(\"div\");\n  const bookButtons = document.createElement(\"div\");\n  const title = document.createElement(\"h2\");\n  const author = document.createElement(\"p\");\n  const pages = document.createElement(\"p\");\n  const readButton = document.createElement(\"button\");\n  const deleteButton = document.createElement(\"button\");\n\n  bookCard.classList.add(\"book-card\");\n  bookButtons.classList.add(\"book-buttons\");\n  title.classList.add(\"book-title\");\n  author.classList.add(\"book-text\");\n  pages.classList.add(\"book-text\");\n  readButton.classList.add(\"button\");\n  deleteButton.classList.add(\"button\");\n  deleteButton.classList.add(\"deleteButton\");\n\n  title.textContent = book.title;\n  author.textContent = `by ${book.author}`;\n  pages.textContent = `${book.pages} pages`;\n  deleteButton.textContent = \"Delete\";\n  readButton.style.width = \"1fr\";\n  if (book.read) {\n    readButton.textContent = \"Read\";\n    readButton.classList.add(\"read-button\");\n  } else {\n    readButton.textContent = \"Not Read\";\n    readButton.classList.add(\"not-read-button\");\n  }\n\n  booksGrid.appendChild(bookCard);\n  bookCard.appendChild(title);\n  bookCard.appendChild(author);\n  bookCard.appendChild(pages);\n  bookButtons.appendChild(readButton);\n  bookButtons.appendChild(deleteButton);\n  bookCard.appendChild(bookButtons);\n\n  clearFields();\n\n  deleteButton.addEventListener(\"click\", (e) => {\n    deleteBook(e.target);\n  });\n\n  readButton.addEventListener(\"click\", () => {\n    book.toggle();\n    fillLibrary();\n  });\n}\n\nfunction resetGrid() {\n  booksGrid.innerHTML = \"\";\n}\n\n\n//# sourceURL=webpack://local-library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;