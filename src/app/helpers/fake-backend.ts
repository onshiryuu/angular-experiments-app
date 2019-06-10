import { Injectable } from '@angular/core';
import { HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { of } from 'rxjs';
import { mergeMap, delay, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  users = [
    {id: 1, email: 'julia@annotech.com', password: '1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTExMTEiLCJuYW1lIjoiSnVsaWEgRW5kZXJzIiwiYXZhdGFyIjoiMTExMTExLnBuZyIsImdlbmRlciI6MSwibGFuZyI6ImRlIiwiYWRtaW4iOnRydWV9.DMbrXUs6YKgGaPn8ADvPEnM2EonjltW2tqJVlVFDtM8'},
    {id: 2, email: 'serika@annotech.com', password: '1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMjIyMjIiLCJuYW1lIjoi5LyK5p2xIOOBm-OCiuOBiyIsImF2YXRhciI6IjIyMjIyMi5wbmciLCJnZW5kZXIiOjEsImxhbmciOiJqcCIsImFkbWluIjp0cnVlfQ.3K0tUVXyU8IME6Hcjl9F5ri-p3AziL6rRVAlIbWflAQ'},
    {id: 3, email: 'john@annotech.com', password: '1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMzMzMzMiLCJuYW1lIjoiSm9obiBLZXJtYW4iLCJhdmF0YXIiOiIzMzMzMzMucG5nIiwiZ2VuZGVyIjowLCJsYW5nIjoiZGUiLCJhZG1pbiI6ZmFsc2V9.G5T8oWZefMq_s_JXtca_fLuk66fJTluQ9hz8A2rgdEY'},
    {id: 4, email: 'bill@annotech.com', password: '1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDQ0NDQiLCJuYW1lIjoiQmlsbCBLZXJtYW4iLCJhdmF0YXIiOiI0NDQ0NDQucG5nIiwiZ2VuZGVyIjowLCJsYW5nIjoiZGUiLCJhZG1pbiI6dHJ1ZX0.atRYk0-ZgsDmqK3Z7GNuCKGMNHYxlJAtV074AXyM5oc'},
    {id: 5, email: 'hata@annotech.com', password: '1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NTU1NTUiLCJuYW1lIjoi55WRIOOBk-OChuOBjSIsImF2YXRhciI6IjU1NTU1NS5wbmciLCJnZW5kZXIiOjEsImxhbmciOiJqcCIsImFkbWluIjpmYWxzZX0.rdaMOwGR86E_u7wsWx1AOz6ZLWKbZL4YQd2SfdE50ys'},
  ];

  admintoken: string;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return of(null)
      .pipe(
        mergeMap(() => {
          if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
            const body = JSON.parse(req.body);

            console.log(this.users);

            const getuser = this.users.filter(user => user.email === body.email && user.password === body.password);
            console.log(getuser);

            if (getuser.length > 0) {
              this.admintoken = getuser[0].token;
              return of(new HttpResponse({ status: 200, body: { token: getuser[0].token } }));
            } else {
              this.admintoken = null;
              return of(new HttpResponse({ status: 200 }));
            }
          }

          if (req.url.endsWith('/api/orders') && req.method === 'GET') {
            if (req.headers.get('Authorization') === 'Bearer ' + this.admintoken) {
              return of(new HttpResponse({ status: 200, body: [1, 2, 3] }));
            }
          }

          return next.handle(req);
        })
      )
      .pipe(materialize())
      .pipe(delay(1000))
      .pipe(dematerialize());
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
