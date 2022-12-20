import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() currentCourse: any;
  constructor() { }

  ngOnInit(): void {
  }

}
