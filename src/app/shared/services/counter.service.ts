import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactivetoActiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive', this.activeToInactiveCounter);    
  }

  incrementInActiveToActive(){
    this.inactivetoActiveCounter++;
    console.log('Inactive to Active', this.inactivetoActiveCounter);
    
  }

  constructor() { }
}
