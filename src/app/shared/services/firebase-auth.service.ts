import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { WindowService } from '../../shared/services/window-service';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class FirebaseAuthService {
    userData: any; // Save logged in user data
    windowRef: Window;

    constructor(
        public afs: AngularFirestore, // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone, // NgZone service to remove outside scope warning
        @Inject(PLATFORM_ID) private platformId: object,
        windowRef: WindowService
    ) {
        this.windowRef = windowRef.getWindow();
        /* Saving user data in localstorage when 
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                if (isPlatformBrowser(this.platformId)) {
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user')!);
                }
            } else {
                if (isPlatformBrowser(this.platformId)) {
                    localStorage.setItem('user', 'null');
                    JSON.parse(localStorage.getItem('user')!);
                }
            }
        });
    }
    // Sign in with email/password
    SignIn(email: string, password: string) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigateByUrl("/");
                });
                this.SetUserData(result.user);
            })
            .catch((error) => {
                this.windowRef.alert(error.message);
            });
    }
    // Sign up with email/password
    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                /* Call the SendVerificaitonMail() function when new user sign 
                up and returns promise */
                this.SendVerificationMail();
                this.SetUserData(result.user);
            })
            .catch((error) => {
                this.windowRef.alert(error.message);
            });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verify-email-address']);
            });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail: string) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                this.windowRef.alert('Password reset email sent, check your inbox.');
            })
            .catch((error) => {
                this.windowRef.alert(error);
            });
    }
    // Returns true when user is looged in and email is verified
    isLoggedIn(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            const user = JSON.parse(localStorage.getItem('user')!);
            return user !== null && user.emailVerified !== false ? true : false;
        }
    }

    getUserDetails() {
        if (this.isLoggedIn()) {
            if (isPlatformBrowser(this.platformId)) {
                const user = JSON.parse(localStorage.getItem('user')!);
                // console.log(user)
                return user;
            }
        }
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
            if (res) {
                this.router.navigate(['/']);
            }
        });
    }
    // Auth logic to run auth providers
    AuthLogin(provider: any) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['/']);
                });
                this.SetUserData(result.user);
            })
            .catch((error) => {
                this.windowRef.alert(error);
            });
    }
    /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }
    // Sign out
    logout() {
        return this.afAuth.signOut().then(() => {
            if (isPlatformBrowser(this.platformId)) {
                localStorage.removeItem('user');
                this.router.navigate(['login']);
            }
        });
    }
}