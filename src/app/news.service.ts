import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  getAllNews() {
    return this.http.get(
      'https://639ad18fd514150197403be5.mockapi.io/api/posts'
    );
  }
  getPostById(id: string) {
    return this.http.get(
      `https://639ad18fd514150197403be5.mockapi.io/api/posts/${id}`
    )
  }
}
