import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private apiUrl = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) { }

  addBook(book: any): Observable<any> {

    if(book.id){return this.http.put<any>(this.apiUrl,book);}
    else{
     return this.http.post<any>(this.apiUrl, book);
    }

   }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/' + id);
  }

  removeBook(id : any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'/' + id);
  }

  getBookByCategory(category : string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/categorie/' + category);
  }

  getBookByTitle(title : string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/title/' + title);
  }
  getBookByAuthor(Author : string): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/auteur/' + Author);
  }

  getBookByTitleAndByCategory(title: string, category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?title=${title}&categorie=${category}`);
  }
  



}
