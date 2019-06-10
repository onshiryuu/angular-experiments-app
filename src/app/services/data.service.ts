import { BadInputError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  getArchiveFaux() {
    const fauxarchive = [
      {
        'id': 1,
        'year': 2019,
        'month': 1,
      },
      {
        'id': 2,
        'year': 2019,
        'month': 2,
      },
      {
        'id': 3,
        'year': 2019,
        'month': 3,
      },
    ];
    return fauxarchive;
  }

  get(page, order) {
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  create(resource) {
    // return throwError(AppError);
    return this.http.post(this.url, resource)
    .pipe(
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, resource.content)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(id) {
    // return throwError(new AppError());
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError);
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
