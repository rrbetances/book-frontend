import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css'
})

export class DetailBookComponent {
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router){}
  model?: Book;
  id: string | null = null;
  routeSubscription?: Subscription
  updateSubscription?: Subscription

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
  onBack(){
    this.router.navigate(['']);
  }
}
