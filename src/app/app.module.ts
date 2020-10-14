import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbOptionModule,
  NbSelectModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todo/todos.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbOptionModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}