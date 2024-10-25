import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-by-id',
  templateUrl: './books-by-id.component.html',
  styleUrl: './books-by-id.component.css'
})
export class BooksByIdComponent {

  book$?: Observable<Book>;
  idFilter: number | null = null;

  constructor(private bookService: BookService, private toastr: ToastrService, private router: Router){}

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
  onBack(){
    this.router.navigate(['']);
  }
}
