import { Component, OnInit } from '@angular/core';
import { IngenieurService } from '../services/ingenieur.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {

  accesslevels = [];
  expertises = [];

  constructor(service: IngenieurService) {
    this.accesslevels = service.getAccessLevels();
    this.expertises = service.getExpertises();
   }

  log(x) { console.log(x); }
  submit(f) { console.log(f); }
}
