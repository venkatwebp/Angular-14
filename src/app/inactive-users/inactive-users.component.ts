import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: any = [];

  constructor( private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToactive(id: number){
    this.userService.setToActive(id);
  }

}
