import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
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

  constructor(
    public router: Router,
    public authService: FirebaseAuthService,
    @Inject(PLATFORM_ID) private platformId: object) { }

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
      return this.authService.logout().then(() => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('user');
        }
        this.router.navigate(['login']);
      });
    }, 1000);
  }
}
