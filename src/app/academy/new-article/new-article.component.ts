import { Component, OnInit } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';
import Quill from "quill";
import BlotFormatter from "quill-blot-formatter";
import ImageCompress from 'quill-image-compress';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
Quill.register("modules/blotFormatter", BlotFormatter);
Quill.register('modules/imageCompress', ImageCompress);

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  modules = {};
  private unsubscriber: Subject<void> = new Subject<void>();
  articleForm = this.formBuilder.group({
    article_name: new FormControl('', Validators.required),
    article_slug: new FormControl('', Validators.required),
    article_image: new FormControl('', Validators.required),
    article_tags: new FormControl('', Validators.required),
    article_content: new FormControl('', Validators.required),
    article_seo_desc: new FormControl('', Validators.required),
  });
  successMsg: string;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService
  ) {
    // ########QUILL-EDITOR########
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': false,
      'emoji-toolbar': true,
      blotFormatter: {
        // empty object for default behaviour.
      },
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction
        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        // [{ 'font': [] }],
        [{ 'align': [] }],
        // ['clean'],                                         // remove formatting button
        ['link', 'image', 'video'],                         // link and image, video
        ['emoji']
      ],
      imageCompress: {
        quality: 1.6, // default 0.7
        maxWidth: 1000, // default
        maxHeight: 1000, // default
        imageType: 'image/jpeg', // default
        debug: true, // default
      }
    }
    // ########QUILL-EDITOR########
  }
  // ########QUILL-EDITOR########
  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      // console.log('KEYBINDING B', range, context)
    })
    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      // console.log('KEYBINDING SHIFT + B', range, context)
    })
  }
  // ########QUILL-EDITOR########

  ngOnInit(): void {
    history.pushState(null, '');
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      window.confirm("Are you sure, you want to discard the changes?");
    });
  }

  onSubmit(value) {
    if (this.articleForm.valid) {
      const _v = this.articleForm.value;
      const form = new FormData();
      form.append('article_name', _v.article_name);
      form.append('article_slug', _v.article_slug);
      form.append('article_image', _v.article_image);
      form.append('article_tags', _v.article_tags);
      form.append('article_content', _v.article_content);
      form.append('article_seo_desc', _v.article_seo_desc);
      this.firebaseService.createArticle(value).then((res) => {
        this.loading = false;
        if (res) {
          this.successMsg = 'Thank you for posting the article. We will get back to you soon.'
        }
      }
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
