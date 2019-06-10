import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(credentials) {
    return this.http.post('/api/authenticate',
    JSON.stringify(credentials))
    .pipe(
      map(response => {
       const result = response;
       if (result && result['token']) {
          localStorage.setItem('token', result['token']);
          return true;
       } else {
          return false;
       }
      })
    );
  }

  logout() {
    if (this.isLoggedIn()) {
      localStorage.removeItem('token');
    }
  }

  isLoggedIn() {
    // console.log('expirationDate = ' + this.jwtHelper.getTokenExpirationDate());
    // console.log('isExpired = ' + this.jwtHelper.isTokenExpired());

    // return !this.jwtHelper.isTokenExpired();

    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (token) {
      const expirationDate = jwtHelper.getTokenExpirationDate(token);
      const isExpired = jwtHelper.isTokenExpired(token);

      return true;
    }
    return false;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelperService().decodeToken(token);
  }
}
