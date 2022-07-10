import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  firstLetter: string;

  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn();
    // const user = this.authService.getLoggedInUser();
    // this.firstLetter = (user !== null && user.length > 0) ? user.displayName.charAt(0).toUpperCase() : "C";
    // console.log(this.firstLetter)
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    setTimeout(() => {
      this.authService.SignOut();
    }, 1000);
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.firstLetter = (user !== null && user.email !== null) ? user.email.charAt(0).toUpperCase() : "C";
  }
}
