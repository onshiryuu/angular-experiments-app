import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddAuthHeaders {
  constructor(private http: HttpClient) {}

  addAuthHeaders(token) {
    return this.http.get('/api/orders', {
      headers: {'Authorization': 'Bearer ' + token}
   });
  }
}
