import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsComponent } from './terms/terms.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'course/:courseId',
    component: LecturesComponent,
    canActivate: [SeoGuard, AuthGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'forgot',
    component: ForgetPasswordComponent,
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [SeoGuard, AuthGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'terms',
    component: TermsComponent,
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'policy',
    component: PolicyComponent,
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
