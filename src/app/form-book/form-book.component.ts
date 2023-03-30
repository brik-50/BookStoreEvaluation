import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent {
  book : Book = new Book() ;
  isAddMode = true; 
  textButton : string ="Add Book";
  
  constructor(private bookService: BookService, private route: ActivatedRoute ,private route_1 : Router) {}
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
     if(id != undefined){
      this.isAddMode = false;
      this.textButton = "Update Book";
      this.bookService.getBook(id).subscribe(
        response => {
          this.book=response;
        }
      );
     }
    });
  }



  onSubmit(form: any) {

    this.book!.description= form.description.value;
    this.book!.title= form.title.value;
    this.book!.auteur= form.auteur.value;
    this.book!.categories= form.categories.value;
    this.book!.isbn= form.isbn.value;
    
    this.bookService.addBook(this.book).subscribe(
      response => {
        console.log(response);
      }
    );

    this.route_1.navigate(['/list'])

    this.bookService.getBooks().subscribe();
  }
}
