import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostApiService } from './post-api.service';
import { User } from './userModel';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  users: any;
  formValue !: FormGroup;
  userObj: User = new User();

  constructor(private formBuilder: FormBuilder,
    private postApi: PostApiService) { }

  ngOnInit() {
      this.formValue = this.formBuilder.group({
        firstName: [],
        lastName: [],
        email: [],
        mobile: [],
        salary: []
      })

      this.getUsers();    
  }

  // onSubmit(data: {uId: number, uEmail: string, uFName: string, uLName: string}){
  //   const myHeaders = new HttpHeaders({'myHeader': 'Next Education'});
  //   this.http.post('http://localhost:3000/posts', data,
  //   {headers: myHeaders})
  //   .subscribe((result)=>{
  //     this.users = result;
  //     console.log('result', result);
  //  console.log('updating in Github');
  //   })
  // }

  postUsers(){

    this.userObj.firstName = this.formValue.value.firstName;
    this.userObj.lastName = this.formValue.value.lastName;
    this.userObj.email = this.formValue.value.email;
    this.userObj.mobile = this.formValue.value.mobile;
    this.userObj.salary = this.formValue.value.salary;

    this.postApi.postUserData(this.userObj).subscribe(res =>{
      return res  
    })

    this.getUsers();
  }

  getUsers(){
    this.postApi.getUserData().subscribe(res =>{
      this.users = res;
      console.log(this.users);      
    })
  }


}
