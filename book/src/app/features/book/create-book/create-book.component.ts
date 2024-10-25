import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { AddBook } from '../models/add-book.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {

  model: AddBook;

  constructor(private router: Router, private bookService: BookService, private toastr: ToastrService){
    this.model = {
      title:'',
      description:'',
      pageCount:0,
      excerpt:'',
      publishDate: new Date(),
    };
  }

  onBack(){
    this.router.navigate(['']);
  }

  onFormSubmit(){
    this.bookService.createBook(this.model)
    .subscribe({ 
      next:data =>{
        this.toastr.success('Book created successfully');
        this.router.navigateByUrl('')
      },
      error:()=>{
        this.toastr.error('Error creating book');
      }
    })
  }
}
