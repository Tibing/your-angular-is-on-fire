import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { Todo } from '../todo';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @ViewChild('input', { static: false }) input: ElementRef;
  @Input() item: DocumentChangeAction<Todo>;
  @Output() save = new EventEmitter<[DocumentChangeAction<Todo>, string]>();
  @Output() delete = new EventEmitter<DocumentChangeAction<Todo>>();
  @Output() toggleComplete = new EventEmitter<[DocumentChangeAction<Todo>, boolean]>();

  inEdit = false;

  @HostBinding('class.completed')
  get completed() {
    return this.data.completed;
  }

  get data(): Todo {
    return this.item.payload.doc.data();
  }

  onEdit() {
    this.inEdit = true;
    setTimeout(() => this.input.nativeElement.focus());
  }

  onSave(message: string) {
    this.inEdit = false;
    this.save.emit([this.item, message]);
  }

  onDelete() {
    this.delete.emit(this.item);
  }

  onToggleComplete(completed: boolean) {
    this.toggleComplete.emit([this.item, completed]);
  }
}
