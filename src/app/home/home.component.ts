import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courses: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(public firebaseService: FirebaseService, public router: Router) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.firebaseService.getCourses().subscribe((result) => {
      this.courses = result;
      this.age_filtered_items = result;
      this.name_filtered_items = result;
    });
  }

  gotoCourse(courseID) {
    this.router.navigateByUrl('listen');
  }
}
