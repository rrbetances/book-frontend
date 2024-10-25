import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './features/book/books-list/books-list.component';
import { EditBookComponent } from './features/book/edit-book/edit-book.component';
import { DetailBookComponent } from './features/book/detail-book/detail-book.component';
import { CreateBookComponent } from './features/book/create-book/create-book.component';
import { BooksByIdComponent } from './features/book/books-by-id/books-by-id.component';

const routes: Routes = [
  {
    path:'',
    component:BooksListComponent
  },
  {
    path:'bookById',
    component:BooksByIdComponent
  },
  {
    path:'edit/:id',
    component:EditBookComponent
  },
  {
    path:'details/:id',
    component:DetailBookComponent
  }, {
    path:'add',
    component:CreateBookComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
