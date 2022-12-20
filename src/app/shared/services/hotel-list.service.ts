import { Injectable } from '@angular/core';
import { HotelViewModel } from '../../hotel-details/hotel-view-model';
// import { HotelViewModel } from '../hotel-details/hotel'

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  private _hotels : HotelViewModel[] = [
    {id: 0, name: 'Taj HOtel', city: 'Mumbai'},
    {id: 1, name: 'Park Hayath', city: 'Hyderabad'},
    {id: 2, name: 'Red Fort', city: 'Banglore'}
  ];

  constructor() { }

  getHotels(){
    return this._hotels;
  }

  getHotelById(id: number):HotelViewModel|undefined{
    return this._hotels.find(p => p.id == id);
  }
}
