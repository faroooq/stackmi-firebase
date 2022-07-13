import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public firebaseAuth: FirebaseAuthService,
    private route: ActivatedRoute,
    private navigate: Router
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.queryParamMap.get('id');
    let token = { "id": id }
    // this.auth.verify(token).subscribe(
    //   (data) => {
    //     // console.log(data)
    //     this.navigate.navigateByUrl('/');
    //   })
  }
}
