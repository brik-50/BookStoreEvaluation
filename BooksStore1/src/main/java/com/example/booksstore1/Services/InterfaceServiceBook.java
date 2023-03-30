package com.example.booksstore1.Services;

import com.example.booksstore1.Exceptions.BookNotFoundException;
import com.example.booksstore1.Models.Book;

import java.util.HashSet;
import java.util.List;

public interface InterfaceServiceBook {

    Book addBook(Book book);

    void deleteBook(long id) throws BookNotFoundException;

    List<Book> findBookByTitle(String title) throws BookNotFoundException;

    List<Book> getAllBooks();

    HashSet<Book> getAllBookByCategoryContaining(String categorie);


}
