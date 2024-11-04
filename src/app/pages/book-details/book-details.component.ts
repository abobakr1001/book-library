import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookDetails:any
  constructor(private route:ActivatedRoute,private bookService:BookService,private wishlistService: WishlistService) {


  }
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookDetails(bookId).subscribe((book:any) => {
      this.bookDetails = book;
      console.log(book,"dddddddd");
    });
  }

  addToWishlist(book: any): void {
    this.wishlistService.addToWishlist(book);
  }

  getCoverUrl(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
  }
}
