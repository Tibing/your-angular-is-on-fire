import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from './todo';

const todos = [
  {
    message: 'Create Nebular TODO demo application',
    completed: true,
  },
  {
    message: 'Deploy to GitHub',
    completed: true,
  },
  {
    message: 'Add Firebase integration example',
    completed: false,
  },
  {
    message: 'Add Dark Theme mode',
    completed: true,
  },
  {
    message: 'Start working on Nebular 5',
    completed: false,
  },
];

@Injectable({ providedIn: 'root' })
export class TodoService {

  private items = new BehaviorSubject<Todo[]>(todos);
  readonly items$: Observable<Todo[]> = this.items.asObservable();

  add(message: string) {
    this.items.next([...this.items.getValue(), { message, completed: false }]);
  }

  updateMessage(editedItem: Todo, message: string) {
    const newItems: Todo[] = this.items.getValue().map((item: Todo) => {
      if (item === editedItem) {
        return { ...item, message };
      }
      return item;
    });

    this.items.next(newItems);
  }

  toggleDone(toggledItem: Todo, completed: boolean) {
    const newItems: Todo[] = this.items.getValue().map((item: Todo) => {
      if (item === toggledItem && item.completed !== completed) {
        return { ...item, completed };
      }
      return item;
    });

    this.items.next(newItems);
  }

  delete(deletedItem: Todo) {
    const newItems: Todo[] = this.items.getValue().filter((item: Todo) => {
      return item !== deletedItem;
    });

    this.items.next(newItems);
  }
}
