import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelListService } from '../shared/services/hotel-list.service';
// import { HotelViewModel } from './hotel';
import { HotelViewModel } from './hotel-view-model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  viewModel: HotelViewModel | undefined;

  constructor( private route: ActivatedRoute, private hotelService: HotelListService) { }

  ngOnInit(){
    const hotelId = this.route.snapshot.params['id'];
    this.viewModel = this.hotelService.getHotelById(hotelId); 

  }

}
