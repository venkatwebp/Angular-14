import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.scss']
})
export class NotificationBoardComponent implements OnInit {
  notificationMsg: string;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notificationSubject.subscribe(d=>{
      this.notificationMsg = d;
    })
  }

}
