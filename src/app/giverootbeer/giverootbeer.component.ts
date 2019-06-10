import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface OnGiveRBArgs {
  isActiveRB: boolean;
  username: string;
}

@Component({
  selector: 'app-giverootbeer',
  templateUrl: './giverootbeer.component.html',
  styleUrls: ['./giverootbeer.component.css']
})
export class GiverootbeerComponent implements OnInit {

  @Input('isActive') isActive: boolean;
  @Input('isActiveRB') isActiveRB: boolean;
  @Input('beercount') beercount: number;
  @Input('rbcount') rbcount: number;
  @Output('change') change = new EventEmitter();
  beerbtntxt = 'Gib Bier';
  rbbtntxt = 'Gib Root Beer';
  username = '';
  message = '';
  movie = '';
  moviename = '';
  bieroderrootbeer = 'bier';

  constructor() {
  }

  ngOnInit() {
  }

  onEnter() {
    this.message = 'Danke, ' + this.username + '!';
  }

  onClick() {
    this.message = (this.isActive) ? 'Es tut uns leid, ' + this.username + '.' : 'Danke für das Bier, ' + this.username + '!';
    this.beerbtntxt = (this.isActive) ? 'Gib Bier' : 'Nimm Bier Zurück';
    this.beercount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

  onClickRB() {
    this.message = (this.isActiveRB) ? 'Es tut uns leid, ' + this.username + '.' : 'Danke für das Root Beer, ' + this.username + '!';
    this.rbbtntxt = (this.isActiveRB) ? 'Gib Root Beer' : 'Nimm Root Beer Zurück';
    this.rbcount += (this.isActiveRB) ? -1 : 1;
    this.isActiveRB = !this.isActiveRB;
    this.change.emit({isActiveRB: this.isActiveRB, username: this.username});
  }

  onEnterMovie() {
    this.moviename = this.movie;
  }

}
