import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  backgroundColour = environment.environmentBackgroundColour;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get authservice() {
    return this.authService;
  }

}
