import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent implements OnInit {

  userDetails: any;
  selectedUser: any = null;

  

  constructor(private userService:UserService){
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    this.userDetails = this.userService.getUserData();
    console.log("hello.......",this.userDetails);
    
  }

  viewUser(userDetail: any) {
    this.selectedUser = userDetail;
  }



}
