import { Component, ElementRef, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { R3SelectorScopeMode } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-practice-excercises',
  templateUrl: './practice-excercises.component.html',
  styleUrls: ['./practice-excercises.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PracticeExcercisesComponent implements OnInit {

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  toppings = new FormControl();
  technologyUsed = new FormControl('Angular 7');
  employees = [
    {
      name: 'Ajay',
      designation: 'Node Developer'
    },
    {
      name: 'Vijay',
      designation: 'Angular Developer'
    },
    {
      name: 'Sai',
      designation: 'JS Developer'
    },
  ]
  // employee = 'Vivek Sai';

  menuList: number = 0;
  // name: string = 'Angular';
  subject: any;
  results: any = [];
  currentMsg: string;

  setDefaultValue(){
    this.technologyUsed.setValue('Angular 14');
  }


  myInfo = {
    firstname: 'Venkat',
    designation: 'Angular Developer',
    exp: '2 years',
    dob: '09-07-1988'
  }
  people: any = [];
  searchItem: any;
  res: any;

  names = ["Venkat", "Vivek", "Sai", "Anand", "Madhu", "Raj"];
  totalValue: number;
  topping: any;
  data: any;

  usersData: any[]= [];

  sendMessage(data: any){
    this.notificationService.sendNotification(data.value);
  }

  constructor(public commonService: CommonService, 
    private element: ElementRef, 
    private httpService: HttpClient,
    private notificationService: NotificationService
    ) { 

      console.log("Application Constructor");
      this.notificationService.userSubject.subscribe(data=>{        
        this.usersData = data;
        console.log(this.usersData);
      })

      this.notificationService.updateUsers();

    let url = new XMLHttpRequest();
    url.open('get', 'https://api.fda.gov/food/enforcement.json?limit=10');
    url.send();
    url.onreadystatechange = ()=>{
      if(url.readyState == 4){
         this.results = JSON.parse(url.response).results;
        console.log(this.results);        
      }
    }

    // let url = "https://api.fda.gov/food/enforcement.json?limit=10";
    // console.log(

    //    this.httpService.get(url)
    // );


    

    this.commonService.addObs(33, 20).subscribe((x: number)=>{
      console.log(x);
    });

    this.names.forEach((e, i)=> this.people.push({
      name: e,
      age: i + 20,
      country: 'India'
    })
    )
  }

  myObservable = new Observable((observer)=>{
    console.log("Observer starts");
    observer.next("1");
    observer.next("2");
    observer.next("3");
    observer.next("4");
  });

  ngOnInit() {

    this.notificationService.notificationSubject.subscribe(d=>{
      this.currentMsg = d;
    })

    this.myObservable.subscribe((val)=>{
      console.log(val);
      
    })
    
    // this.subject = new Subject();
    this.subject = new BehaviorSubject(0);
    const obs = interval(1000);
    // const sub1 = obs.subscribe((value)=>{
    //   console.log("subscriber 1 " + value);
    // });

    // setTimeout(() => {
    //   const sub2 = obs.subscribe(value => {
    //     console.log("subscriber 2 " + value);
    //     sub1.unsubscribe();      
    //   })
    //   setTimeout(() => {
    //     sub2.unsubscribe();
    //   }, 6000)
    // }, 4000)

    obs.subscribe(value => {
      this.subject.next(value);
    })

    this.subject.subscribe((data: string) => {
      // console.log("1st " + data);      
    })

    setTimeout(() => {
      this.subject.subscribe((data:string)=>{
        // console.log("2nd " + data);        
      })
    }, 3000)


  }

  onSelect(value: number){
    this.menuList = value;

    console.log(this.menuList);    
  }

  sum(n1: any, n2: any, n3: any){
    this.res = this.commonService.add(n1, n2, n3);
    console.log(this.res);    
  }

  addName(n: string, a: string){
    var obj = {
      name: n,
      age: a
    }
    this.commonService.addStudent(obj);
  }

}
function addResources() {
  throw new Error('Function not implemented.');
}

