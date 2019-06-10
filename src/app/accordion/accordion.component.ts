import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input('title') title: string;

  activeACC = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.activeACC = !this.activeACC;
  }

}
