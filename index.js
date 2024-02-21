
// Define a Book class
class Book {
    constructor(title, author, available = true) {
      this.title = title;
      this.author = author;
      this.available = available;
    }
  }
  
  // Define a Library class
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Function to add a book to the library
    addBook(title, author) {
      const newBook = new Book(title, author);
      this.books.push(newBook);
    }
  
    // Function to display list of available books
    displayAvailableBooks() {
      const availableBooks = this.books.filter(book => book.available);
      console.log("Available Books  :");
      availableBooks.forEach(book => {
        console.log(`${book.title} by ${book.author}`);
      });
    }
  
    // Function to borrow a book
    borrowBook(title) {
      const bookIndex = this.books.findIndex(book => book.title === title);
      if (bookIndex !== -1 && this.books[bookIndex].available) {
        this.books[bookIndex].available = false;
        console.log(`You have successfully borrowed ${title}.`);
      } else {
        console.log(`Sorry, ${title} is not available for borrowing.`);
      }
    }
  
    // Function to return a borrowed book
    returnBook(title) {
      const bookIndex = this.books.findIndex(book => book.title === title);
      if (bookIndex !== -1 && !this.books[bookIndex].available) {
        this.books[bookIndex].available = true;
        console.log(`You have successfully returned ${title}.`);
      } else {
        console.log(`Invalid operation. ${title} was not borrowed or does not exist.`);
      }
    }
  }
  
  // Usage example:
  const library = new Library();
  
  // Add books to the library
  library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
  library.addBook("To Kill a Mockingbird", "Harper Lee");
  library.addBook("1984", "George Orwell");
  
  // Display available books
  library.displayAvailableBooks();
  
  // Borrow a book
  library.borrowBook("To Kill a Mockingbird");
  
  // Display available books after borrowing
  library.displayAvailableBooks();
  
  // Return a book
  library.returnBook("To Kill a Mockingbird");
  
  // Display available books after returning
  library.displayAvailableBooks();