// DOM Consts
const libraryTable = document.getElementById('library-table');

// JS Table and functions
const myLibrary = [];

function Book(title, author, pages, released, read) {
    if(!new.target) throw Error("Must use 'new' keyword to create object;");
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
    library.forEach((book) => {
        let newRow = table.insertRow();
        for (let prop in book) {
            let newCell = newRow.insertCell();
            newCell.textContent = book[prop];
        }
    });
}

addBookToLibrary('Naruto', 'Masashi Kishimoto', 192, 2000, 'not read');

updateTable(myLibrary, libraryTable);