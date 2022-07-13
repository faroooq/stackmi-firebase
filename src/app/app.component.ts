import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service';
import { FirebaseAuthService } from './shared/services/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stackmi';

  constructor(public auth: FirebaseAuthService) {
  }

  ngOnInit() {
    // this.oneSignalService.initOneSignal();
  }
}
