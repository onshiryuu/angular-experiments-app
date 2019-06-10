import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('Ein unerwarteter Fehler ist aufgetreten | 予期せぬエラーが発生した');
    console.log(error);
  }
}
