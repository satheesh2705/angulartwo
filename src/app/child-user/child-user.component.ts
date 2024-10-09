import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-user',
  templateUrl: './child-user.component.html',
  styleUrl: './child-user.component.scss'
})
export class ChildUserComponent {

  @Input() user :any;
  @Output() userDelete = new EventEmitter<any>();
  @Output() userClose = new EventEmitter<any>();


  deleteUser(){
    console.log( "user id : ", this.user.id);
    this.userDelete.emit(this.user.id);
  }

  closeUser(){
    console.log( "user id : ", this.user.id);
    this.userClose.emit(this.user.id);
  }

}
