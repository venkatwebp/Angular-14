import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @ViewChild('serverContentInput') serverContentInput: any;
  @ViewChild('colorStyle') colorStyle:any;

  @Input() employee: {name: string, designation: string} = {name: '', designation: ''};

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;

  employees = [
    {
      name: "AJay",
      designation: "JS Developer"
    },
    {
      name: "Sai",
      designation: "Angular Developer"
    },
    {
      name: "Vijay",
      designation: "Backend Developer"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.colorStyle.nativeElement.focus();    
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

    this.colorStyle.nativeElement.focus();
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
