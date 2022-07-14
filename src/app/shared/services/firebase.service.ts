import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore) { }

  getAvatars() {
    return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).valueChanges();
  }

  updateUser(userKey, value) {
    // value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getEvents() {
    return this.db.collection('events').valueChanges();
  }

  getEventDetails(eventId) {
    return this.db
      .collection('events', (ref) =>
        ref.where('event_name', '==', eventId)
      )
      .valueChanges();
  }

  getArticle(articleId) {
    return this.db.collection('articles', (ref) =>
      ref.where('article_slug', '==', articleId)
    ).snapshotChanges();
  }

  getArticlesList(params) {
    return this.db.collection('article_topics', (ref) =>
      ref.where('course_slug', '==', params)
    ).valueChanges();
  }

  // searchUsers(searchValue) {
  //   return this.db
  //     .collection('users', (ref) =>
  //       ref
  //         .where('nameToSearch', '>=', searchValue)
  //         .where('nameToSearch', '<=', searchValue + '\uf8ff')
  //     )
  //     .snapshotChanges();
  // }

  searchUsersByAge(value) {
    return this.db
      .collection('users', (ref) => ref.orderBy('age').startAt(value))
      .snapshotChanges();
  }

  createUser(value) {
    return this.db.collection('users').add({
      first_name: value.first_name,
      nameToSearch: value.first_name.toLowerCase(),
      last_name: value.last_name,
      email: value.email,
      phone: value.phone,
      course: value.course,
    });
  }

  promotionalUser(user) {
    return this.db.collection('promotional_users').add({
      first_name: user.first_name,
      email: user.email,
      promotional: user.promotional,
    });
  }

  contactForm(value) {
    return this.db.collection('contact').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      email: value.email,
      mobile: value.mobile,
      description: value.description,
    });
  }

  demoCourse(value) {
    return this.db.collection('demo_reg_users').add({
      user_name: value.user_name,
      mobile: value.mobile,
      email: value.email,
      course_name: value.course_name,
    });
  }

  enrollCourse(value) {
    return this.db.collection('course_reg_users').add({
      user_name: value.user_name,
      mobile: value.mobile,
      email: value.email,
      course_name: value.course_name,
      start_date: value.start_date,
      end_date: value.end_date,
      duration: value.duration,
      event_price: value.event_price,
    });
  }

  createEvent(value) {
    return this.db.collection('events').add({
      event_name: value.event_name,
      event_host: value.event_host,
      event_url: value.event_url,
      start_date: value.start_date,
      end_date: value.end_date,
      duration: value.duration,
      event_price: value.event_price,
      description: value.description,
      event_seo_desc: value.event_seo_desc
    });
  }
  createArticle(value) {
    return this.db.collection('articles').add({
      article_name: value.article_name,
      article_slug: value.article_slug,
      article_image: value.article_image,
      article_tags: value.article_tags,
      article_content: value.article_content,
      article_seo_desc: value.article_seo_desc
    });
  }

  updateArticle(slug, value) {
    return this.db.collection('articles').doc(slug).set(value);
  }
}
