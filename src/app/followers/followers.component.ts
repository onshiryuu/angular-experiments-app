import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;
  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit() {
    combineLatest( this.route.paramMap, this.route.queryParamMap )
    .pipe(
      switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');

        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers);
  }
}
