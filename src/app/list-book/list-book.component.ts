import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent {

  listBooks: Book[] = [];
  searchTitle!: any ;
  searchCategory!: any ;
  searchAuthor!: any ;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.listBooks = response;
      }
    );
  }

  hundleChange(){
    if(this.searchTitle == null && this.searchCategory == null ){
      this.bookService.getBooks().subscribe(
        response => {
          this.listBooks=response;
          this.searchAuthor="";
        }
      );
    }
    else if(this.searchTitle != null && this.searchCategory == null ){
      this.bookService.getBookByTitle(this.searchTitle).subscribe(
        response => {
          this.listBooks=response;
          this.searchAuthor="";
        }
      );
    }
    else if(this.searchTitle == null && this.searchCategory != null ){
      this.bookService.getBookByCategory(this.searchCategory).subscribe(
        response => {
          this.listBooks=response;
          this.searchAuthor="";
        }
      );
    }
    else if (this.searchTitle != null && this.searchCategory != null){
      this.bookService.getBookByTitleAndByCategory(this.searchTitle,this.searchCategory).subscribe(
        response => {
          this.listBooks=response;
          this.searchAuthor="";
        }
      );
    }
  }

  hundleChangeAuthor(){
    if(this.searchAuthor == "" ||  this.searchAuthor == null){
      this.bookService.getBooks().subscribe(
        response => {
          this.listBooks=response;
          this.searchCategory="";
          this.searchTitle="";
        }
      );

    }else{
      this.bookService.getBookByAuthor(this.searchAuthor).subscribe(
        response => {
          this.listBooks=response;
          this.searchCategory="";
          this.searchTitle="";
        }
      );
    }
  }

  Refresh(){
    this.bookService.getBooks().subscribe(
      response => {
        this.listBooks = response;
      }
    );
  }

  OnDelete(id : number){
    this.bookService.removeBook(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
