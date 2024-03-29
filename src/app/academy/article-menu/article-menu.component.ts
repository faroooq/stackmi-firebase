import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { FirebaseService } from '../../shared/services/firebase.service';
import { HttpService } from '../../shared/services/http.service';
import { Article } from '../models';

@Component({
  selector: 'app-article-menu',
  templateUrl: './article-menu.component.html',
  styleUrls: ['./article-menu.component.css']
})
export class ArticleMenuComponent implements OnInit {
  loading: boolean;
  courses: any;
  article: Article;
  url: string;
  isCollapsed: boolean = true;


  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public http: HttpService,
    public firebaseService: FirebaseService
  ) {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (this.router.url.startsWith('/academy/courses/')) {
        this.getCourses(data.title);
      }
      // Angular Beginners Route
      if (this.router.url.startsWith('/academy/article/html')) {
        this.getCourses('html-intro');
      } else if (this.router.url.startsWith('/academy/article/css')) {
        this.getCourses('css-intro');
      } else if (this.router.url.startsWith('/academy/article/js')) {
        this.getCourses('js-intro');
      } else if (this.router.url.startsWith('/academy/article/ts')) {
        this.getCourses('ts-intro');
      } else if (this.router.url.startsWith('/academy/article/ng')) {
        this.getCourses('ng-intro');
      } else if (this.router.url.startsWith('/academy/article/rt')) {
        this.getCourses('rt-intro');
      } else if (this.router.url.startsWith('/academy/article/java')) {
        this.getCourses('java-intro');
      } else if (this.router.url.startsWith('/academy/article/spring')) {
        this.getCourses('spring-intro');
      } else if (this.router.url.startsWith('/academy/article/python')) {
        this.getCourses('python-intro');
      } else if (this.router.url.startsWith('/academy/article/django')) {
        this.getCourses('django-intro');
      }
    });
  }

  getCourses(title) {
    if ($('#sidebar').hasClass('active')) {
      $("#sidebar").toggleClass('active')
    }
    this.firebaseService.getArticlesList(title).subscribe((article) => {
      this.courses = article[0];
      this.loading = false;
    })
  }
}
