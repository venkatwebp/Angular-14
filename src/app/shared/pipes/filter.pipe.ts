import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchItem: any, searchBy: string): any {
    if(!searchItem){
      return items;
    }

    return items.filter(item => {
      const currentItem = item[searchBy];
      // return currentItem.toString().toLowerCase().includes(searchItem.trim().toLowerCase());
      return currentItem.toLowerCase().includes(searchItem.trim().toLowerCase());
    });
  }

}
