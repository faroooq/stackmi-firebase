import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpService } from '../../shared/services/http.service';
import { DatePipe } from '@angular/common';
import { TimeFormat } from '../../shared/pipe/time.pipe';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  loading: boolean;
  selectedFiles: FileList;
  download_image: any;
  percentage: number;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  formSubmitted: boolean = false;
  errorMsg: string;
  successMsg: string;
  eventForm = this.formBuilder.group({
    event_name: new FormControl('', Validators.required),
    event_host: new FormControl('', Validators.required),
    event_url: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    event_price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    event_seo_desc: new FormControl('', Validators.required)
  });
  fileChooseMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    public httpservice: HttpService,
    public datepipe: DatePipe,
    public firebaseService: FirebaseService,
    public timepipe: TimeFormat) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  onSubmit(value) {
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    if (this.eventForm.valid) {
      const _v = this.eventForm.value;
      console.log(_v.start_date + _v.end_date)
      const form = new FormData();
      form.append('event_name', _v.event_name);
      form.append('event_host', _v.event_host);
      form.append('event_url', _v.event_url);
      form.append('start_date', _v.start_date + "");
      form.append('end_date', _v.end_date + "");
      form.append('duration', _v.duration);
      form.append('event_price', _v.event_price);
      form.append('description', _v.description);
      form.append('event_seo_desc', _v.event_seo_desc);
      this.firebaseService.createEvent(value).then((res) => {
        this.loading = false;
        if (res) {
          this.successMsg = 'Thank you for posting the event. We will get back to you soon.'
        }
      }
      );
      // this.resetFields();
    }

  }

  resetFields() {
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    this.eventForm = this.formBuilder.group({
      event_name: new FormControl('', Validators.required),
      event_host: new FormControl('', Validators.required),
      event_url: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      event_price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      event_seo_desc: new FormControl('', Validators.required)
    });
  }
}
