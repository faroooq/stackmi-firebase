import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  formSubmitted: boolean = false;
  errorMsg: string;
  successMsg: string;
  forgotForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit(formData) {
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.forgotForm.valid) {
      const _v = this.forgotForm.value;
      this.authService.ForgotPassword(_v.email).then((response) => {
        if (
          response &&
          response.code &&
          response.code === 'auth/user-not-found'
        ) {
          // console.log(this.errorMsg);
          this.errorMsg = 'No user found. please sign up.';
        } else {
          // console.log(this.successMsg);
          this.successMsg = 'Password reset email sent, please check your inbox.';
        }
      });
    }
  }
}
