const myLibrary = []

   function Book (author, title, pages, read) {
    this.author = author,
    this.title = title, 
    this.pages = pages,
    this.read = read,
    indexNumber = 
  }

    button = document.getElementById("submit");
    form = document.getElementById("book-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        addBookToLibrary()
    })
    
  
    function addBookToLibrary () {;
        author = document.getElementById("author").value;
        title = document.getElementById("title").value;
        pages = document.getElementById("pages").value;
        read = document.getElementById("read").value;
        let book = new Book(author, title, pages, read)
        myLibrary.push(book)
        renderBook()
        console.log(myLibrary)
    }

    function renderBook () {
        for (let i = 0; i < myLibrary.length; i++){
            let book = myLibrary[i]
            let indexNumber = myLibrary.indexOf(book)
            let div = document.createElement("div");
            body.appendChild(div).innerHTML = `
                <div data-index-number = "${indexNumber}" class = "container-card">
                <div>Author <span>${book.author}</span></div>
                <div>Title <span>${book.title}</span></div>
                <div>Pages <span>${book.pages}</span></div>
                <div>Read? <span>${book.read}</span></div>
                <button data-index-number = "${indexNumber}" class="remove">Remove</button>
                </div>`
        
                
        }

    }

    