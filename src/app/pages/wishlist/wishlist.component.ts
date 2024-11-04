import { Component } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(bookKey: string): void {
    this.wishlistService.removeFromWishlist(bookKey);
    this.wishlist = this.wishlistService.getWishlist();
  }

  getCoverUrl(book: any) {
    debugger
    console.log(book,"Sssssssssss");
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    } else if (book.edition_key ) {
      return `https://covers.openlibrary.org/b/olid/${book.edition_key[0]}-M.jpg`;
    } else {
      return 'path/to/placeholder-image.jpg'; // Fallback image if no cover is available
    }
  }
}
