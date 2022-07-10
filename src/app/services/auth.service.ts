import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
export interface Promotional {
  first_name: string;
  email: string;
  promotional: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState: any;
  userData: User;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public firebaseService: FirebaseService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SignIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['courses']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        return error;
      });
  }

  SignUp(email, password, firstName, promotional) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SendVerificationMail();
        const userState: User = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: firstName,
          photoURL: result.user.photoURL,
          emailVerified: true,
        };
        this.SetUserData(userState);

        const promotionalData: Promotional = {
          first_name: firstName,
          email: email,
          promotional: promotional,
        };
        this.firebaseService.promotionalUser(promotionalData);
      })
      .catch((error) => {
        return error;
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verify']);
      });
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        // console.log('Password reset link sent');
      })
      .catch((error) => {
        return error;
        // window.alert(error);
      });
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log('user : ' + JSON.stringify(user));
    return user !== null ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['courses']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL !== undefined ? user.photoURL : '',
      emailVerified: user.emailVerified,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return userRef.set(userState, {
      merge: true,
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }
}
