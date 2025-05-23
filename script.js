let libraryContainer = document.querySelector('.container');

const button = document.querySelector('button');

const userTitle = document.querySelector("input[name='title']");
const userAuthor = document.querySelector("input[name='author']");
const userPages = document.querySelector("input[name='pages']");
const userRead = document.querySelector("select[name='read']");

const myLibrary = [];

function initiateLibrary() {
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
  addBookToLibrary('The Vegetarian', 'H. Kang', 192, true)
  addBookToLibrary('Martyr!', 'K. Akbar', 331, false)
  addBookToLibrary('Three Women', '	L. Taddeo', 320, true)
  addBookToLibrary('A Waiter in Paris', 'E. Chisholm', 384, false)
}

initiateLibrary()

button.addEventListener('click', (event) => {
  addBookToLibrary(userTitle.value, userAuthor.value, userPages.value, userRead.value)
  
  userTitle.value = ''
  userAuthor.value = ''
  userPages.value = ''
  userRead.value = "true"

  event.preventDefault()  
  createLibrary()
})

// Creating the cards to show the books

function createLibrary() {

  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }

  for (let i = 0; i <= myLibrary.length; i++) {
    const readTxt = myLibrary[i].read ? "Already read ;)" : "Not read yet :(";
    
    const card = document.createElement("div")
    card.id = "book";
    libraryContainer.appendChild(card)

    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");

    const titleContent = document.createTextNode(`${myLibrary[i].title} `)
    const authorContent = document.createTextNode(`${myLibrary[i].author} `)
    const pagesContent = document.createTextNode(`${myLibrary[i].pages} pages`)
    
    const readCheckbox = document.createElement("div")
    readCheckbox.id = "readDiv"

    const readInput = document.createElement('input')
    const label = document.createElement("label")
    label.innerText = 'Read'
    label.id = "readLabel"
    readInput.type = "checkbox";
    readInput.id = "readInput";
    readInput.checked = myLibrary[i].read;

    const remove = document.createElement("button");
    remove.id = "btnRemove";
    remove.textContent = "Remove Book"

    card.appendChild(title);
    title.appendChild(titleContent);

    card.appendChild(author);
    author.appendChild(authorContent);

    card.appendChild(pages);
    pages.appendChild(pagesContent);
    
    card.appendChild(readCheckbox);
    readCheckbox.appendChild(label);
    readCheckbox.appendChild(readInput);

    card.appendChild(remove)

    readInput.addEventListener('change', function() {
      if (readInput.checked) {
        myLibrary[i].read = true
      } else {
        myLibrary[i].read = false
      }
    });

    remove.addEventListener('click', () => {
      libraryContainer.removeChild(card);
      });
  }
}

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
      return(`${this.title} by ${this.author}, ${this.pages} pages, ${readTxt}, ID: ${this.id}`)
    };
}

function addBookToLibrary(title, author, pages, read) {    
  var book = new Book(title, author, pages, read); 
  myLibrary.push(book);
}

createLibrary()




