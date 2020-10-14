import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { DocumentChangeAction } from '@angular/fire/firestore/interfaces';

import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  // private collection: AngularFirestoreCollection<Todo> = this.firestore.collection('todos');
  // items$: Observable<DocumentChangeAction<Todo>[]> = this.collection.snapshotChanges();
  items$ = of([]);

  constructor(private firestore: AngularFirestore) {
  }

  add(message: string) {
    // this.collection.add({ message });
  }

  updateMessage([item, message]: [DocumentChangeAction<Todo>, string]) {
    // this.collection
    //   .doc(item.payload.doc.id)
    //   .set({ message }, { merge: true });
  }

  toggleCompleted([item, completed]: [DocumentChangeAction<Todo>, boolean]) {
    // this.collection
    //   .doc(item.payload.doc.id)
    //   .set({ completed }, { merge: true });
  }

  delete(item: DocumentChangeAction<Todo>) {
    // this.collection
    //   .doc(item.payload.doc.id)
    //   .delete();
  }
}
