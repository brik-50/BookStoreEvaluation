package com.example.booksstore1.Repository;


import com.example.booksstore1.Models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {

  List<Book> findBookByTitleStartsWith(String title);

  List<Book> findBookByAuteurStartsWith(String title);


  @Query(value = "SELECT * FROM Book b WHERE b.categories LIKE %:category%" ,nativeQuery = true)
  List<Book> getAllBookByCategoryContaining(@Param("category") String category);



}
