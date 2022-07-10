import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  errorMsg: string;
  inquiryForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit(formData) {
    this.errorMsg = '';
    this.formSubmitted = true;
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      this.authService.SignIn(_v.email, _v.password).then((response) => {
        if (response && response.code) {
          if (response.code === 'auth/user-not-found') {
            this.errorMsg = 'No user found. please sign up.';
          } else if (response.code === 'auth/wrong-password') {
            this.errorMsg = 'You have entered wrong password.';
          }
        }
      });
    }
  }

  forgotPassword() {
    this.router.navigateByUrl('forgot');
  }
}
