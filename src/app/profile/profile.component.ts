import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  coursesList: Array<any>;
  user: any;
  first_name: string;
  email: string;
  formSubmitted: boolean = false;
  enrollMsg: string =
    'Thank you for contacting us. We will get back to you soon..';
  inquiryForm = this.formBuilder.group({
    first_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.formSubmitted = false;
    this.enrollMsg = '';
    this.getUsers();
  }

  getUsers() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const user = this.firebaseService
      .getUser(this.user.uid)
      .subscribe((userData: User) => {
        this.inquiryForm.get('first_name').setValue(userData.displayName);
        this.inquiryForm.get('email').setValue(userData.email);
      });
  }

  updateProfile(value) {
    this.formSubmitted = true;
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const userState: User = {
        uid: this.user.uid,
        email: _v.email,
        displayName: _v.first_name,
        emailVerified: true,
      };
      this.firebaseService.updateUser(this.user.uid, userState).then((user) => {
        this.enrollMsg = 'Your name has been updated successfully!';
        this.router.navigate(['courses']);
      });
    }
  }

  forgotPassword() {
    this.router.navigateByUrl('forgot');
  }
}
