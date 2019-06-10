import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    const token = localStorage.getItem('token');

    return this.http.get('/api/orders', {
      headers: {'Authorization': 'Bearer ' + token}
   })
    .pipe(
      map(response => response)
    );
  }
}
