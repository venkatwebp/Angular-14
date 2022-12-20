import { Component, OnInit, Input } from '@angular/core';
import { HotelViewModel } from '../hotel-details/hotel'
import { HotelListService } from '../shared/services/hotel-list.service';
import { CommonService } from '../shared/services/common.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user';  

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  @Input() hotels: HotelViewModel[]= [];
  clients$: Observable<User[]> ;
  num: number = 4;

  constructor( private hotelService: HotelListService, private commonService: CommonService) { }

  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }

  getClients(){
    this.commonService.getAll().subscribe((data: any)=> this.clients$ = data);
  }

}
