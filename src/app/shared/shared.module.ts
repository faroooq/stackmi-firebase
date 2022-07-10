import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafePipe } from './pipe/safe.pipe';
import { ArraySortPipe } from './pipe/arraysort.pipe';
import { SeoService } from './seo-service/seo.service';
import { SeoGuard } from './seo-service/seo.guard';
import { RequestCache } from './services/cache.service';
import { ThemeService } from './services/theme.service';
import { CachingInterceptor } from './services/cache.interceptor';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [ArraySortPipe],
  providers: [
    HttpClient,
    SeoService,
    SeoGuard,
    ThemeService,
    CachingInterceptor,
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ArraySortPipe,
  ],
})
export class SharedModule {}
