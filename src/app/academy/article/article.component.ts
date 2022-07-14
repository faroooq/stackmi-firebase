import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JsonFormData } from '../json-form/json-form.component';
import { HighlightResult } from 'ngx-highlightjs';
import { HttpService } from '../../shared/services/http.service';
import { AuthService } from '../../shared/services/auth-service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // @ViewChild('iframe') iframe: ElementRef;
  public formData: JsonFormData;
  // article: Article;
  loading: boolean = true;
  frame_available: boolean;
  article: any;
  iFrameCode: any;
  userDetails: any;
  // socialShares: ['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp'];
  // https://ngx-highlight.netlify.app/
  response: HighlightResult;
  articleUrl: string;
  articleImage: string;
  adminButton: boolean;

  constructor(
    public route: ActivatedRoute,
    private http: HttpService,
    public authService: FirebaseAuthService,
    public router: Router,
    public httpClient: HttpClient,
    public firebaseService: FirebaseService
  ) { }
  // https://www.buzzphp.com/posts/how-to-embed-a-github-gist-in-the-angular-template
  ngOnInit(): void {
    // this.articleImage = environment.default_imageUrl;
    this.article = {};
    this.frame_available = false;
    if (this.authService.isLoggedIn()) {
      this.userDetails = this.authService.getUserDetails();
      // console.log(this.userDetails)
      if (this.userDetails.email === 'faroooq.in@gmail.com') {
        this.adminButton = true;
      }
    }
    this.route.params
      .subscribe(params => {
        // this.articleUrl = environment.articleurl + params.title;
        this.firebaseService.getArticle(params.title).subscribe((article) => {
          this.loading = false;
          this.article = article[0];
        })
      })
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      value: '{...}',
      relevance: e.relevance,
      top: '{...}',
      code: '{...}',
      illegal: false
    }
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    setTimeout(() => {
      this.authService.logout();
    }, 1000);
  }
}
