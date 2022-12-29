import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() employee: {name: string, designation: string} = {name: '', designation: ''};
  // @Input() employee: string;

  constructor() { }

  ngOnInit(): void {
  }

}
