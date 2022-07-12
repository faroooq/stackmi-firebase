import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoGuard } from '../shared/seo-service/seo.guard';
import { LearningsComponent } from './learnings.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {
    path: '',
    component: LearningsComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'academy',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'new-article',
    component: NewArticleComponent,
  },
  {
    path: 'article/:title/edit',
    component: EditArticleComponent,
  },
  {
    path: 'courses/:title/edit',
    component: EditArticleComponent,
  },
  {
    path: 'article/:title',
    component: ArticleComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'article',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'courses/:title',
    component: ArticleComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'article',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningsRoutingModule { }
