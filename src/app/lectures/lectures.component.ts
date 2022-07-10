import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
})
export class LecturesComponent implements OnInit {
  coursesDetails: any;
  youtubeUrl: string;
  courseId: number = 1001;
  empty_course: boolean;
  loading: boolean;
  selectedLesson: string = 'Introduction';

  constructor(
    public firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.youtubeUrl = 'https://www.youtube.com/embed/fUFyIFyRSAg';
    this.activatedRoute.params.forEach((params: Params) => {
      this.courseId = +params['courseId'];
    });
    this.getCoursesDetails(this.courseId);
  }

  getCoursesDetails(courseId) {
    this.firebaseService.getCoursesDetails(courseId).subscribe((result) => {
      this.loading = false;
      this.coursesDetails = result;
      if (
        Array.isArray(this.coursesDetails) &&
        this.coursesDetails.length === 0
      ) {
        this.empty_course = true;
      }
    });
  }

  onClick(youtubeUrl, lesson: string) {
    this.youtubeUrl = youtubeUrl;
    this.selectedLesson = lesson;
  }
}
