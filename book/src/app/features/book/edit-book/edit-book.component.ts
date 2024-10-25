import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';
import { UpdateBook } from '../models/update-book.model';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  model?: Book;
  id: string | null = null;
  routeSubscription?: Subscription
  updateSubscription?: Subscription

  constructor(private route: ActivatedRoute, private bookService: BookService, 
    private router: Router, 
    private toastr: ToastrService){}

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      if(this.id){
        this.bookService.getBookById(this.id).subscribe(response => {
          this.model = response;
        })
      }
    })
  }

  onFormSubmit(){
    console.log("entro aqui");
    if(this.model){
      var updateBlogpost: UpdateBook = {
         title: this.model.title,
         description: this.model.description,
         excerpt: this.model.excerpt,
         pageCount: this.model.pageCount,
         publishDate: this.model.publishDate
      }

      this.updateSubscription = this.bookService.updateBook(String(this.id), updateBlogpost)
      .subscribe({ 
        next:data =>{
          this.toastr.success('Book updated successfully');
          this.router.navigateByUrl('')
        },
        error:()=>{
          this.toastr.error('Error updating book');
      }});
    }
  }

  onDelete(){
    if(this.id){
      this.bookService.deleteBook(this.id)
      .subscribe({ 
        next:data =>{
          this.toastr.success('Book deleted successfully');
          this.router.navigateByUrl('')
        },
        error:()=>{
          this.toastr.error('Error deliting book');
      }});
    }
  }
}
