import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore/interfaces';
import { User } from 'firebase';

import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  user$: Observable<User> = EMPTY;
  items$: Observable<DocumentChangeAction<Todo>> = EMPTY;

  add(message: string) {
  }

  updateMessage([item, message]: [DocumentChangeAction<Todo>, string]) {
  }

  toggleCompleted([item, completed]: [DocumentChangeAction<Todo>, boolean]) {
  }

  delete(item: DocumentChangeAction<Todo>) {
  }

  logout() {
  }
}
