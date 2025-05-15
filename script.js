let libraryContainer = document.querySelector('.container');

// Creating the cards to show the books

function createLibrary() {
  for (let i = 0; i <= myLibrary.length; i++) {
    const readTxt = myLibrary[i].read ? "already read" : "not read yet";
    
    const card = document.createElement("div")
    card.id = "book";
    libraryContainer.appendChild(card)

    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    const titleContent = document.createTextNode(`${myLibrary[i].title} `)
    const authorContent = document.createTextNode(`${myLibrary[i].author} `)
    const pagesContent = document.createTextNode(`${myLibrary[i].pages} pages, `)
    const readContent = document.createTextNode(`${readTxt}`)
    
    card.appendChild(title);
    title.appendChild(titleContent);

    card.appendChild(author);
    author.appendChild(authorContent);

    card.appendChild(pages);
    pages.appendChild(pagesContent);
    
    card.appendChild(read);
    read.appendChild(readContent);
}
}

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
addBookToLibrary('The Vegetarian', 'H. Kang', 192, true)
addBookToLibrary('Martyr!', 'K. Akbar', 331, false)
addBookToLibrary('Three Women', '	L. Taddeo', 320, true)
addBookToLibrary('A Waiter in Paris', 'E. Chisholm', 384, false)



createLibrary()
