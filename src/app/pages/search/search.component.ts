import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKey = 'title';
  searchQuery = '';
  books: any[] = [];
  errorMessage = '';

  constructor(private bookService: BookService) {}

  onSearch(): void {
    this.errorMessage = '';
    this.books = [];

    if (!this.searchQuery.trim()) {
      this.errorMessage = 'Please enter a search query.';
      return;
    }

    this.bookService.searchBooks(this.searchKey, this.searchQuery).subscribe(
      (response) => {
        if (response.docs && response.docs.length > 0) {
          this.books = response.docs.slice(0, 9);
        } else {
          this.errorMessage = 'No books found matching your criteria.';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred while searching. Please try again later.';
      }
    );
  }
}
