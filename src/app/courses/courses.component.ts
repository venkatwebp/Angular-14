import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/services/common.service';

export interface UsersData {
  id: number;
  name: string;
  country: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  searchText = '';
  courses: {id: number, name: string, imagePath: string, version: string, description: string}[] = [];
  serviceId: any;
  selectedCourse: any;

  // displayedColumns: any[] = ['id', 'name', 'country'];

  onSearchService(searchValue: any){
    this.searchText = searchValue;
  }

  showCource(ind: number){
    this.selectedCourse = this.courses[ind];
  }

  constructor(private commonService: CommonService, private route: ActivatedRoute){  }

  ngOnInit() {
    this.courses = this.commonService.courses;
    
    // this.courses = this.commonService.getServiceId(serviceId);
    
  }

}
