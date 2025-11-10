// DOM Consts
const libraryTable = document.getElementById('library-table');
const addBookDialog = document.getElementById('add-book-dialog');
const addBookButton = document.getElementById('add-book-button');
const closeModal = document.getElementById('close-modal');
const submitBook = document.getElementById('submit-book');

// DOM Form Consts
const addBookForm = document.getElementById('add-book-form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookReleased = document.getElementById('released');
const bookRead = document.getElementById('read');

// JS Table and functions
const myLibrary = [];

function Book(title, author, pages, released, read) {
    if (!new.target) throw Error("Must use 'new' keyword to create object;");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.released = released;
    this.read = read;
}

function addBookToLibrary(title, author, pages, released, read) {
    let book = new Book(title, author, pages, released, read);
    myLibrary.push(book);
}

function updateTable(library, table) {
    let book = library[library.length - 1];
    let newRow = table.insertRow();
    for (let prop in book) {
        let newCell = newRow.insertCell();
        newCell.textContent = book[prop];
    }

    // Delete button cell
    let deleteButtonCell = newRow.insertCell();
    deleteButtonCell.appendChild(deleteRowButton(newRow));
}

function deleteRowButton(row) {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = '🗑️';
    deleteButton.style.borderRadius = '50%';
    deleteButton.style.backgroundColor = 'red';

    deleteButton.addEventListener('click', () => {
        row.remove();
    });
    return deleteButton;
}

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

submitBook.addEventListener("click", () => {

    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let released = bookReleased.value;
    let read = bookRead.value;

    if (addBookForm.checkValidity()) {
        addBookToLibrary(title, author, pages, released, read);
        updateTable(myLibrary, libraryTable);
        addBookForm.reset();
        addBookDialog.close();
    } else {
        addBookForm.reportValidity();
    }
});