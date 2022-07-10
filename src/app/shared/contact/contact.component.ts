import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  successMsg: string;
  inquiryForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.successMsg = '';
  }

  onSubmit(value) {
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('name', _v.name);
      form.append('email', _v.email);
      form.append('mobile', _v.mobile);
      form.append('description', _v.description);

      // Submit your form to app call
      this.firebaseService.contactForm(value).then((res) => {
        this.successMsg =
          'Thank you for contacting us. We will get back to you soon!';
        this.resetFields();
      });
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
}
