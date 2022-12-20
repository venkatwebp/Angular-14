import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const usersData = [
  {
    name: "vivek",
    age: 24,
    des: "Front End developer"
  },
  {
    name: "sai",
    age: 24,
    des: "Backend developer"
  },
  {
    nmae: "venkat",
    age: 30,
    des: "Angular developer"
  },
]

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // public notificationSubject = new Subject<string>();
  public notificationSubject = new BehaviorSubject<string>('Angular Behaviour Subject');
  userSubject = new Subject<any>();

  constructor() {}

  sendNotification(data: string){
    this.notificationSubject.next(data);
  }

  updateUsers(){
    this.userSubject.next([usersData])
  }

}
