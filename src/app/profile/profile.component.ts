import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

export interface UserList{
  id: string;
  userName:string,
  userNumber:string,
  userEmail:string,
  userGender:string
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  constructor(private userService: UserService,){

  }
  data: UserList[] = [];
  displayedColumns: string[] = ['userName', 'userNumber', 'userEmail', 'userGender','action'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  
  ngOnInit(): void {
    this.data =JSON.parse(JSON.stringify(this.userService.getUserData()))
  }


  selectedUser: any = null;

  viewUser(userId: string) {
    console.log(userId);
    this.selectedUser = this.data.find( item => item.id == userId);
  }

  userViewClose(userId : any){
    this.selectedUser = null;
  }

  onDeleteUser(userId: any) {
    console.log(userId);
    this.data = this.data.filter( item => item.id !== userId)
     this.userViewClose(userId)
  }

  


}
