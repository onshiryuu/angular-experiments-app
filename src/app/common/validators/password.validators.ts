import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static mustMatch(control: AbstractControl): ValidationErrors | null {
    if ( control.value.newpassword !== control.value.reppassword ) {
      return { mustMatch: true };
    }
    return null;
  }

  static mustBeCorrect(control: AbstractControl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if ( control.value === '123456') {
          resolve(null);
        } else {
          resolve({ mustBeCorrect: true });
        }
      }, 2000);
    });
  }

}
