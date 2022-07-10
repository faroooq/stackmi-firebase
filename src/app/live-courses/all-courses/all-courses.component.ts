import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TimeFormat } from '../../shared/pipe/time.pipe';
import { FirebaseService } from '../../shared/services/firebase.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  events: any;
  loading: boolean;
  getImages: any[];
  is_registered: boolean;

  public sendCourse: Subject<string> = new Subject<string>();

  constructor(
    public router: Router,
    public http: HttpService,
    public timePipe: TimeFormat,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getEvents();
  }

  getEvents() {
    this.firebaseService.getEvents().subscribe((result) => {
      this.loading = false;
      this.events = result;
    });
  }

  selectedCourse(data) {
    this.sendCourse.next(data);
  }

  ngOnDestroy() {
    this.sendCourse.unsubscribe();
  }
}
