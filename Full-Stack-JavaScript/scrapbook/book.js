function Book(title, author, pages, read) {
    if(!new.target) throw Error("Must use 'new' keyword to create object;");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => { return `${this.title} by ${this.author}, ${this.read}.` };
}