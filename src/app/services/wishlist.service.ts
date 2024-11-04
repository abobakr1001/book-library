import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: any[] = [];

  addToWishlist(book: any): void {
    if (!this.wishlist.find(item => item.key === book.key)) {
      this.wishlist.push(book);
      alert("Book added to Wishlist!");
    } else {
      alert("Book is already in your Wishlist!");
    }
  }

  removeFromWishlist(bookKey: string): void {
    const index = this.wishlist.findIndex(book => book.key === bookKey);
    if (index !== -1) {
      const confirmed = confirm("Are you sure you want to remove this book from your Wishlist?");
      if (confirmed) {
        this.wishlist.splice(index, 1);
        alert("Book removed from Wishlist!");
      }
    }
  }

  getWishlist(): any[] {
    return this.wishlist;
  }
}
