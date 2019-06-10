import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expertiseform',
  templateUrl: './expertiseform.component.html',
  styleUrls: ['./expertiseform.component.css']
})
export class ExpertiseformComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      qualification: fb.group({
        education: [],
        experience: []
      }),
      fields: fb.array([])
    });
  }

  addField(field: HTMLInputElement) {
    this.fields.push(new FormControl(field.value));
    field.value = '';
  }

  removeField(field: FormControl) {
    const index = this.fields.controls.indexOf(field);
    this.fields.removeAt(index);
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }
}
