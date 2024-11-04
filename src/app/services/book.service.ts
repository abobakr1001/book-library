import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://openlibrary.org/subjects/finance.json?limit=9';
 private apiUrl = 'https://openlibrary.org'
  constructor(private http: HttpClient) {}


  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getBookDetails(work_id: any) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${work_id}.json`);
  }

  getAuthorDetails(authorId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${authorId}.json`);
  }

  searchBooks(key: string, query: string): Observable<any> {
    const searchParam = key === 'title' ? 'title' : key === 'author' ? 'author' : 'subject';
    return this.http.get<any>(`https://openlibrary.org/search.json?${searchParam}=${query}`);
  }
  // searchBooks(query: string, key: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/search?${key}=${query}`);
  // }
}
