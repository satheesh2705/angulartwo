import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  
  @Input() todo!: string;
  @Output() todoCompleted = new EventEmitter<string>();

  completeTodo() {
    this.todoCompleted.emit(this.todo);
  } 

}
