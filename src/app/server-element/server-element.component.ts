import { AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  ContentChild, 
  DoCheck, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  Output, 
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string} = {type: '', name: '', content: ''};
  @Input() name: string= "";
  @Input() serviceName: string = "";
  @Input() placeHolder: string = "";
  interval: any;
  lastNumber = 0;
  @ContentChild('contentParagraph') paragraph: any;


  @Output() intervalFired = new EventEmitter<number>();

  constructor() { 
    console.log('Constructor called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log('Text Content of paragraph -' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterInit called!');
    // console.log('Text Content of paragraph -' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called!");    
  }

  onStartGame(){
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

}
