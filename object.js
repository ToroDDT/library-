const myLibrary = []

   function Book (author, title, pages, read) {
    this.author = author,
    this.title = title, 
    this.pages = pages,
    this.read = read,
    indexNumber = function () {

    }
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
        checkBook()
        console.log(myLibrary)
    }

    
    function renderBook () {
      let nodelistArr = []
      let nodelist = document.querySelectorAll(".container-card");
      for (let i = 0; i < nodelist.length; i++){
       let value = nodelist[i].dataset.indexNumber;
       nodelistArr.push(value)
    }
    return nodelistArr
  }


      

      function checkBook () {
        let indexesOfLibrary = []
        let nodelistArr = renderBook()
        let book; 
        let indexNumber
        for(let i = 0; i < myLibrary.length; i++){
          indexesOfLibrary.push(myLibrary.indexOf(myLibrary[i]))
           book = myLibrary[i]
           indexNumber = myLibrary.indexOf(book)
        }
        console.log(nodelistArr)
        console.log(indexesOfLibrary)
        indexesOfLibrary.forEach((element, index) => {
          const element2 = nodelistArr[index];
          console.log(element)
          console.log(element2)
          if (element != element2) {
            
             console.log(indexNumber)
            let div = document.createElement("div");
            let container = document.getElementById("card-layout")
            container.appendChild(div).innerHTML = `
                <div data-index-number = "${indexNumber}" class = "container-card">
                <div>Author <span>${book.author}</span></div>
                <div>Title <span>${book.title}</span></div>
                <div>Pages <span>${book.pages}</span></div>
                <div>Read? <span>${book.read}</span></div>
                <button data-index-number = "${indexNumber}" class="remove">Remove</button>
                </div>` 
               }
        })
      }
    

    bookContainer = document.getElementById("card-layout")
    bookContainer.addEventListener("click", function(e) {
        if (e.target.nodeName === "BUTTON"){
          document.getElementById(e.target.parentNode.remove())
          myLibrary.splice(n)
        }
      }, false)
