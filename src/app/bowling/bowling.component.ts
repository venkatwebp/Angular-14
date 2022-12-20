import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { UserModel } from './userModel';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.scss']
})
export class BowlingComponent implements OnInit {
  numArray: any = [];
  numValue: number;
  bowlArr: any = []
  sumArr: Array<any> = [];
  sumNum: number;
  clicks: number = 0;
  sumVal: number = 0;
  sum: number;
  sumNumber: any;
  sumArrNum: number;
  finalValue: any = [];
  maxValue: boolean = false;
  maxLength: number = 20;
  finalMaxValue: number;

  formValue!: FormGroup;
  userObj : UserModel = new UserModel(); 

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit() {

    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    });


    for(var i = 0; i <= 10; i++){
     this.numArray.push(i);
    }
    console.log(this.numArray);
    return this.numArray;
  }

  getNum(val: number){
    this.numValue = this.numArray[val];
    // console.log(this.bowlArr);
    if(this.bowlArr.length < this.maxLength){
      this.bowlArr.push(this.numValue);
      if(this.bowlArr.length%2==0){
        this.sumArr.length=0;
        this.finalValue.length=0;
        for(let i = 0; i < this.bowlArr.length; i+=2){
            this.sumVal = this.bowlArr[i] + this.bowlArr[i+1];
            this.sumArr.push(this.sumVal);
            var totalArray = this.sumArr.reduce((x, y) => x + y);
            this.finalValue.push(totalArray);   
          }
        }
      }
      
      if(this.bowlArr.length == this.maxLength){
        this.maxValue = true;
        this.finalMaxValue = Math.max(...this.finalValue);
      }    
  }


  // userData code
  postUser(){
    this.userObj.firstName = this.formValue.value.firstName;
    this.userObj.lastName = this.formValue.value.lastName;
    this.userObj.email = this.formValue.value.email;
    this.userObj.mobile = this.formValue.value.mobile;
    this.userObj.salary = this.formValue.value.salary;


    this.api.postEmployeeData(this.userObj)
    .subscribe(res =>{
      console.log(res);
      
    })
  }

}
