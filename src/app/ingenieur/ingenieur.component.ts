import { Component, OnInit } from '@angular/core';
import { IngenieurService } from '../services/ingenieur.service';
import { OnGiveRBArgs } from '../giverootbeer/giverootbeer.component';

@Component({
  selector: 'app-ingenieur',
  templateUrl: './ingenieur.component.html',
  styleUrls: ['./ingenieur.component.css']
})

export class IngenieurComponent implements OnInit {

  title = 'Ingenieure';
  ingenieure = [];

  beers = {
    isActive: false,
    isActiveRB: false,
    beercount: 10,
    rbcount: 10
  };

  isActive = true;

  constructor(service: IngenieurService) {
    this.ingenieure = service.getIngenieure();
   }

  ngOnInit() {
  }

  loadIngenieure() {
    this.ingenieure =  [
      {id: 1, name: 'Karen Enders'},
      {id: 2, name: 'Lisa Berger'},
      {id: 3, name: 'Scott Manley'},
      {id: 4, name: 'Jebediah Kerman'},
      {id: 5, name: 'Gene Kerman'}
    ];
  }

  trackIngenieur(index, ingenieur) {
    return ingenieur ? ingenieur.id : undefined;
  }

  onGiveRB(emitdata: OnGiveRBArgs) {
    if (emitdata.isActiveRB && emitdata.username !== '') {
      this.ingenieure.push({id: this.ingenieure.length, name: emitdata.username});
    }
  }

  onRemove(ingenieur) {
    const index = this.ingenieure.indexOf(ingenieur);
    this.ingenieure.splice(index, 1);
  }

  onChange(ingenieur) {
    ingenieur.name = 'CHANGED';
  }

}
