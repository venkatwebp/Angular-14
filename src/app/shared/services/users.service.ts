import { Injectable } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  actUsers = [{
    name: 'Ajay'
  },
  {
    name: 'Sai',
    qualifications: [{
      title: "BTech"
    }]
  },
  {
    name: 'Rahul',
    qualifications: [{
      title: "BTech",
      designation:[{
        name: 'Module Lead'
      }]
    }]
  }
]

  constructor(  private counterService: CounterService ) { }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  setToInActive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
