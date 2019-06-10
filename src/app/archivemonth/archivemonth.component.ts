import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archivemonth',
  templateUrl: './archivemonth.component.html',
  styleUrls: ['./archivemonth.component.css']
})
export class ArchivemonthComponent implements OnInit {

  year: any;
  month: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.year = +params.get('archiveyear');
      this.month = +params.get('archivemonth');
    });
  }

  back() {
    this.router.navigate(['/archive'], {});
  }

}
