import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { count, Observable } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model'
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: any;
  @ViewChild('nameAmount') nameAmount: any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Input() taskDetails!: any;
  inputName = '';
  inputAmount= '';
  elementName= '';
  elementAmount= '';
  elements: any;
  dataArray = [];
  showEditComponent: boolean;
  flag: any = '';
  @Input() sList: string;
  @Output() childData = new EventEmitter();

  myObservable= new Observable((observer: any)=> {
    console.log("Observable Starts");

    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4'); 
    // observer.error('Some Error')
    observer.completed();
    observer.next('5');
  })
  firstObsSubscription: any;
  

  constructor(private commonService: CommonService) {  
    this.elements = [
      { 
        name: 'Enter name',
        amount: 'Enter amount'
      },
      { 
        name: 'Enter name',
        amount: 'Enter amount'
      }
    ];
  }

  check(v: any){
    if(v % 2 == 0){
      this.flag = 'even';
    }else{
      this.flag = 'odd';
    }
  }

  ngOnInit(){
    // this.myObservable.subscribe((val: any)=>{
    //   console.log(val);      
    // })

    // const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; }) => {
    //   let count = 0;
    //   setInterval(()=>{
    //     observer.next(count);
    //     count++;
    //   })
    // }, 1000);

    // this.firstObsSubscription = customIntervalObservable.subscribe((data : any) => {
    //   console.log(data);
      
    // });

    if(this.taskDetails){
      this.showEditComponent = this.commonService.showShoppingEdit;
    }
  }


  onChild(){
    this.childData.emit('Child Data coming here with Output Method.')
  }

  onAddItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.nameAmount.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient)
  }

  // onAddItem(){
  //   this.dataArray.push();
  // }

  onElementDeleted(element: number) {
    let index = this.elements.indexOf(element);

    this.elements.splice(index, 1);
  }

}
