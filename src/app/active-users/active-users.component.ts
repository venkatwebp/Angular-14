import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: any = [];

  constructor( private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToInactive(id: number){
    this.userService.setToInActive(id);
  }

}
