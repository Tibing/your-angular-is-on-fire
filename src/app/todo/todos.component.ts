import { Component } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { DocumentChangeAction } from '@angular/fire/firestore/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  user$: Observable<User> = this.fauth.authState;

  collection: AngularFirestoreCollection<Todo> = this.firestore.collection<Todo>('todos');

  items$: Observable<DocumentChangeAction<Todo>[]> = this.user$.pipe(
    switchMap((user: User) => {
      if (!user) {
        return NEVER;
      }

      return this.firestore
        .collection<Todo>(
          'todos',
          ref => ref.where('userId', '==', user.uid),
        )
        .snapshotChanges();
    }),
  );

  constructor(private firestore: AngularFirestore,
              private fauth: AngularFireAuth,
              private router: Router) {
  }

  add(message: string) {
    this.user$
      .pipe(take(1))
      .subscribe((user: User) => {
        this.collection.add({ message, userId: user.uid });
      });
  }

  updateMessage([item, message]: [DocumentChangeAction<Todo>, string]) {
    this.collection
      .doc(item.payload.doc.id)
      .set({ message }, { merge: true });
  }

  toggleCompleted([item, completed]: [DocumentChangeAction<Todo>, boolean]) {
    this.collection
      .doc(item.payload.doc.id)
      .set({ completed }, { merge: true });
  }

  delete(item: DocumentChangeAction<Todo>) {
    this.collection
      .doc(item.payload.doc.id)
      .delete();
  }

  async logout() {
    await this.fauth.signOut();
    this.router.navigateByUrl('login');
  }
}
