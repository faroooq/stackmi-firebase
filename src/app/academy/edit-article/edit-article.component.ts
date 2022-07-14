import { Component, OnInit } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';
import Quill from "quill";
import BlotFormatter from "quill-blot-formatter";
import ImageCompress from 'quill-image-compress';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
Quill.register("modules/blotFormatter", BlotFormatter);
Quill.register('modules/imageCompress', ImageCompress);

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  modules = {};

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
  article: any;
  articleId: any;

  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public route: ActivatedRoute,
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
    this.route.params
      .subscribe(params => {
        this.firebaseService.getArticle(params.title).subscribe((article: any) => {
          this.loading = false;
          this.article = article[0].payload.doc.data();
          this.articleId = article[0].payload.doc.id;
          this.articleForm.get("article_name").setValue(this.article.article_name);
          this.articleForm.get("article_slug").setValue(this.article.article_slug);
          this.articleForm.get("article_image").setValue(this.article.article_image);
          this.articleForm.get("article_tags").setValue(this.article.article_tags);
          this.articleForm.get("article_content").setValue(this.article.article_content);
          this.articleForm.get("article_seo_desc").setValue(this.article.article_seo_desc);
        })
      })
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
      this.firebaseService.updateArticle(this.articleId, value).then(() => {
        console.log('Record updated')
      });
    }
  }

}
