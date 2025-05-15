

const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    const readTxt = read ? "already read" : "not read yet";
    this.info = function() {
      return(`${this.title} by ${this.author}, ${this.pages} pages, ${readTxt}, ID: ${this.id}`)
    };
}

function addBookToLibrary(title, author, pages, read) {    
  var book = new Book(title, author, pages, read); 
  myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(myLibrary)
