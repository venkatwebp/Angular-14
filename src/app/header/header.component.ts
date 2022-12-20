import { Component, 
  EventEmitter,
  Input,
  OnInit, 
  Output, 
  ViewChild,
  AfterContentInit,
  ViewEncapsulation} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input() headName: any;
  @Output() navigation = new EventEmitter<any>();
  @ViewChild('headerBg') headerBg: any;
  stateName = '';
  user = "sudheer";


  constructor() { }

  ngOnInit() {
    console.log(this.greeter(this.user));
    
  }

  @Output() SideNavToggle = new EventEmitter();

  openSidenav() {
    this.SideNavToggle.emit();
    console.log('sidenav open');
    
  }

  greeter(person: string){
      return 'Hello'+ ' ' + person;
  }


  ngAfterViewInit(){
  }

  onSelect(type: any){
    this.navigation.emit(type);
    this.stateName = type;
  }

}
