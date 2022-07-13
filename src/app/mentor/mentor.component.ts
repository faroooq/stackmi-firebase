import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { AuthService } from '../shared/services/auth-service';
import { FirebaseAuthService } from '../shared/services/firebase-auth.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  constructor(private scroller: ViewportScroller, public authService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  gotoSection(section) {
    this.scroller.scrollToAnchor(section);
  }

}
