import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit{
  book: any;
  authors: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookDetails(bookId).subscribe((data) => {
        this.book = data;
    
        this.loadAuthors(data.authors);
      });
    }
  }

  loadAuthors(authorsArray: any[]): void {
    authorsArray.forEach((author) => {
      const authorId = author.author.key.split('/').pop();
      if (authorId) {
        this.bookService.getAuthorDetails(authorId).subscribe((authorData) => {
          this.authors.push(authorData);
        });
      }
    });
  }
}
