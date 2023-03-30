package com.example.booksstore1.Controllers;

import com.example.booksstore1.Exceptions.BookNotFoundException;
import com.example.booksstore1.Models.Book;
import com.example.booksstore1.Services.Impl.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin
public
class BookController {

    @Autowired
    private BookService bookService;


    @GetMapping
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Optional<Book> getBook(@PathVariable long id) {
        return bookService.getBook(id);
    }


    @GetMapping("/title/{title}")
    public List<Book> findBookByTitle(@PathVariable String title){
        return  bookService.findBookByTitle(title);
    }

    @GetMapping("/categorie/{categorie}")
    public HashSet<Book> getAllBookByCategoryContaining(@PathVariable String categorie) {
        return bookService.getAllBookByCategoryContaining(categorie);
    }

    @GetMapping("/auteur/{auteur}")
    public List<Book> findBookByAuthor(@PathVariable String auteur){
        return  bookService.findBookByAuthor(auteur);
    }




    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }


    @PutMapping
    public Book updateBook(@RequestBody Book book) {
        return bookService.updatebook(book);
    }


    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable long id) throws BookNotFoundException {
        bookService.deleteBook(id);
    }

    @GetMapping("/search")
    public List<Book> getAllBookByTitleAndCategory(@RequestParam(required = false) String title , @RequestParam(required = false) String categorie ){
        return bookService.getAllBookByTitleAndCategory(title,categorie);



    }












}
