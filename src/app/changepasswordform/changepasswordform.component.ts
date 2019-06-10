import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-changepasswordform',
  templateUrl: './changepasswordform.component.html',
  styleUrls: ['./changepasswordform.component.css']
})

export class ChangepasswordformComponent {

  form = new FormGroup({
    oldpassword: new FormControl('',
    Validators.required,
    PasswordValidators.mustBeCorrect),
    changedpassword: new FormGroup({
      newpassword: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        PasswordValidators.cannotContainSpace
      ],
      ),
      reppassword: new FormControl('',
        Validators.required
      ),
    }, PasswordValidators.mustMatch)
  });

  changepassword() {
    alert('Passwort geändert! | パスワード変更済み = ' + this.newpassword.value);
  }

  get oldpassword() {
    return this.form.get('oldpassword');
  }

  get changedpassword() {
    return this.form.get('changedpassword');
  }

  get newpassword() {
    return this.form.get('changedpassword.newpassword');
  }

  get reppassword() {
    return this.form.get('changedpassword.reppassword');
  }

}
