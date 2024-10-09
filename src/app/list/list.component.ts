import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  todos = ['Learn Angular', 'Build a Todo App', 'Master Input/Output'];

  addTodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }

  onTodoCompleted(completedTodo: string) {
    this.todos = this.todos.filter(todo => todo !== completedTodo);
  }


}
