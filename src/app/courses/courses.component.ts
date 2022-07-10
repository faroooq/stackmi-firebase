import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;
  loading: boolean;

  constructor(public firebaseService: FirebaseService, public router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.getCourses();
  }

  getCourses() {
    this.firebaseService.getCourses().subscribe((result) => {
      this.loading = false;
      this.courses = result;
      this.age_filtered_items = result;
      this.name_filtered_items = result;
    });
  }

  gotoCourse(course) {
    if (course.id != undefined && !course.button_enabled) {
      this.router.navigate(['course', course.id]);
    }
  }
}
