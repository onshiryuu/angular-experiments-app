import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace,
    ],
    [
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('', Validators.required),
    address: new FormGroup({
      housenumber: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      nation: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get address() {
    return this.form.get('address');
  }

  get housenumber() {
    return this.form.get('address.housenumber');
  }

  get street() {
    return this.form.get('address.street');
  }

  get city() {
    return this.form.get('address.city');
  }

  get nation() {
    return this.form.get('address.nation');
  }

}
