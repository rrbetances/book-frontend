import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  books$?: Observable<Book[]>;
  idFilter: number | null = null;

  constructor(private bookService: BookService, private toastr: ToastrService){}

  ngOnInit(): void {
      this.books$ = this.bookService.getAllBooks();

      this.books$.subscribe({ 
        next:_ =>{
        },
        error:()=>{
          this.toastr.error('Error geting the books');
        }
      })
  }
}
