import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books-by-id',
  templateUrl: './books-by-id.component.html',
  styleUrl: './books-by-id.component.css'
})
export class BooksByIdComponent {

  book$?: Observable<Book>;
  idFilter: number | null = null;

  constructor(private bookService: BookService, private toastr: ToastrService){}

  ngOnInit(): void {
  }

  searchById() {
    this.book$ = this.bookService.getBookById(String(this.idFilter));
      this.book$.subscribe({ 
        next:_ =>{
        },
        error:()=>{
          this.toastr.error('Error geting the book');
        }
      })
  }
}
