import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [  { path: 'landing',component:LandingComponent },
  { path: 'book/:id',component:BookDetailsComponent },
  { path: 'author/:id', component:AuthorDetailsComponent },
  { path: 'search', component:SearchComponent },
  { path: 'wishlist',component:WishlistComponent},
  { path: '', redirectTo: 'landing', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
