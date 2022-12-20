import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { Services } from '../shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  serviceView: Services | undefined;
  serviceId: any;
  courses: {id: number, name: string, imagePath: string, version: string, description: string, details: Array<{head1: string, para1: string, head2: string, para2: string}>} [] = []
  data = '';
  constructor(private route: ActivatedRoute, private commonService: CommonService) { }
  
  myObj = new Observable(
    (listner : any) => {
      listner.next(1);
      listner.next(2);
      setTimeout( ()=> listner.next(3), 1000);
      setTimeout( ()=> listner.next(4), 1000);

      listner.next(5);
      listner.complete();
    }  
  )

  getSubscribe(){
    this.myObj.subscribe(
      (data: any) => { console.log(data) },
      () => { console.log('completed')}
    )
  }
  
  ngOnInit(){
    this.serviceId = this.route.snapshot.params['id']; 
    this.serviceView = this.commonService.getServiceId(this.serviceId);    
  }

}
