import { Component, ContentChild, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  products: any[] = [];

  title = 'udemyExercises';
  serverElements = [    {
      type: 'server', 
      name: 'Testserver', 
      content: 'Just a test!'
    }
  ];

  
  employees: any = [
    {
      name: "Vivek",
      designation: "Angular developer"
    }
  ]
  
  @ViewChild('childUpdate') childUpdate: any;
  @ViewChild('radioText') radioText: any;
  @ViewChild('colorStyle') colorStyle: any;
  headText = '';
  textValue = '';
  pageHeading = '';
  interval: any;
  parentCount = 0;
  loadedFeature = "recipe";
  
  
  sOffer: string = "Amazon 70% Offer avaialable!";
  heading: string = "Angular 14 New Features";
  sidenav: any;
  
  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }
  
  onNavigation(feature: string){
    this.loadedFeature = feature;
  }
  
  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
    this.textValue = "Place Holder Heading";
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  gameStart(count: any){
    this.parentCount = count;
  }

  onChangeFirst(){
    this.serverElements[0].type = "Server Changed!";
    this.headText = 'Place Holder Text';
    this.pageHeading = 'Recipes Component';    
  }
  onDestroyFirst(){
    this.serverElements.splice(0, 1);
    this.childUpdate.nativeElement.innerHTML = "Angular View child UPDATED!";
    this.childUpdate.nativeElement.classList = "heading";
    console.log(this.childUpdate);
    
    this.radioText.checked = true;
    this.textValue = '';
  }

  constructor() { 
    console.log('Constructor called!');
  }
  // ngOnChanges(){
  //   console.log('ngOnChanges called!');
  // }
  ngOnInit(){
    this.products = this.getProducts();
    console.log('ngOnInit called!');
  }
  // ngDoCheck(){
  //   console.log('ngDoCheck called!');
  // }
  // ngAfterContentInit(){
  //   console.log('ngAfterInit called!');
  //   // console.log('Text Content of paragraph -' + this.paragraph.nativeElement.textContent);
  // }
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked called!');
  // }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit called!');
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked called!');
  // }
  // ngOnDestroy(){
  //   console.log("ngOnDestroy called!");    
  // }


}
