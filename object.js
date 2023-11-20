
//create an object constructor for books/:
    // create a function called book 
   //create a variable author 
   //create a variable pages 
   //create a variable title 
   // create a variable read 

   function Book (author, title, pages, read) {
    this.author = author,
    this.title = title, 
    this.pages = pages,
    this.read = read
  }

    
  //create a function to add a book to myLibrary array 
  //we first need to gather input from user 
  //How do we gather input from user?
     // create input fields:
             // how do we gather the text value from each field 
              //create selectors for each field input 
             // for each input field get text value 
      //store each input text value into a variable 
      //call book constructor function with the following arguements(author,pages,title)
      //store return value from function into variable called book
      //add book object to an array called myLibrary
  
      function addBookToLibrary () {;
        author = document.getElementById("author").value;
        title = document.getElementById("title").value;
        pages = document.getElementById("pages").value;
        read = document.getElementById("read").value;
        let book = new Book(author, title, pages, read)

      }