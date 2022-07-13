import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  firstLetter: string;
  user: any;
  userDetails: any;
  adminButton: boolean;

  constructor(public router: Router, public authService: FirebaseAuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.userDetails = this.authService.getUserDetails();
      // console.log(this.userDetails)
      if (this.userDetails.email === 'faroooq.in@gmail.com') {
        this.adminButton = true;
      }
    }
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  hostEvent() {
    this.router.navigateByUrl('host-event');
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    setTimeout(() => {
      this.authService.logout();
    }, 1000);
  }
}
