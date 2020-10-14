import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  items$: Observable<Todo[]> = this.todoService.items$;

  constructor(private todoService: TodoService) {
  }

  add(message: string) {
    this.todoService.add(message);
  }

  save([item, message]: [Todo, string]) {
    this.todoService.updateMessage(item, message);
  }

  toggleDone([item, done]: [Todo, boolean]) {
    this.todoService.toggleDone(item, done);
  }

  delete(item) {
    this.todoService.delete(item);
  }
}
