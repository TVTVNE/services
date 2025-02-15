import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'; // Import du composant TodoList

@Component({
  selector: 'app-root',
  standalone: true, // Le composant est autonome
  imports: [RouterOutlet, TodoListComponent], // Ajoute TodoListComponent ici
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-todo-list></app-todo-list>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-app';
}
