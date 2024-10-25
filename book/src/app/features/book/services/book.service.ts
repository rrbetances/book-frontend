import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBook } from '../models/add-book.model';
import { Book } from '../models/book.model';
import { environment } from '../../../../environments/environment';
import { UpdateBook } from '../models/update-book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient ) { }

  createBook(data: AddBook): Observable<Book>{
    return this.http.post<Book>(`${environment.apiBaseUrl}/api/books`, data);
  }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.apiBaseUrl}/api/books`);
  }

  getBookById(id: string): Observable<Book>{
    return this.http.get<Book>(`${environment.apiBaseUrl}/api/books/${id}`);
  }

  updateBook(id: string, book: UpdateBook): Observable<Book>{
    return this.http.put<Book>(`${environment.apiBaseUrl}/api/books/${id}`, book);
  }

  deleteBook(id: string): Observable<any>{
     return this.http.delete(`${environment.apiBaseUrl}/api/books/${id}`);
  }
}
