import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent {

  book : Book = new Book() ;

  constructor(private bookService: BookService, private route: ActivatedRoute ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.bookService.getBook(id).subscribe(
        response => {
          this.book=response;
        }
      );
    });
  }


}
