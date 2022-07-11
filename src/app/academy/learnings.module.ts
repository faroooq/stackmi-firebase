import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LNavbarComponent } from './l-navbar/l-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { LearningsRoutingModule } from './learnings-routing.module';
import { LearningsComponent } from './learnings.component';
import { ArticleComponent } from './article/article.component';
import { ArticleMenuComponent } from './article-menu/article-menu.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { CourseAddsComponent } from './course-adds/course-adds.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [
    LearningsComponent,
    LNavbarComponent,
    ArticleMenuComponent,
    ArticleComponent,
    JsonFormComponent,
    CourseAddsComponent,
    NewArticleComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    LearningsRoutingModule,
    QuillModule.forRoot()
  ],
  exports: [
    SharedModule
  ]
})
export class LearningsModule { }
