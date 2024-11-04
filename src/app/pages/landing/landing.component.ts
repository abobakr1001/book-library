import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  books: any[] = [];

  constructor(private bookService: BookService,private Router:Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe((data: any) => {
      this.books = data.works
    });
  }

  details(details:any){
    this.Router.navigateByUrl("book/"+details)
  }
  Authordetails(Author:any){
    this.Router.navigateByUrl("author/"+Author)
  }
}
