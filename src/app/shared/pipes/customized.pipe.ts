import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customized'
})
export class CustomizedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value, args);
    // var profile = value.firstname + " - " + value.designation; 
    var myD = new Date('September 1, 88 00:20:18');
    var mineY = myD.getFullYear();
    var currentD = new Date();
    var currentY = currentD.getFullYear();
    var myAge = currentY - mineY;
    
    
    return myAge;
  }

}
