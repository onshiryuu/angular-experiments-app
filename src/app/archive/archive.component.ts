import { ArchiveService } from './../services/archive.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archive: any;

  constructor(
    private route: ActivatedRoute,
    private service: ArchiveService) { }

  ngOnInit() {
    this.archive = this.service.getArchiveFaux();
  }

}
