import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './features/book/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditBookComponent } from './features/book/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './features/book/detail-book/detail-book.component';
import { CreateBookComponent } from './features/book/create-book/create-book.component';
import { BooksByIdComponent } from './features/book/books-by-id/books-by-id.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    EditBookComponent,
    DetailBookComponent,
    CreateBookComponent,
    BooksByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
