import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../bowling/userModel';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinValue!: FormGroup;
  userObj : UserModel = new UserModel(); 
  submitted: boolean;
  logoutBtn: boolean = false;
  isAvailable: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signinValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(5), Validators.required]]
    })
  }

  signIn(){
    this.submitted = true;
    this.userObj.firstName = this.signinValue.value.firstName;
    this.userObj.lastName = this.signinValue.value.lastName;
    this.userObj.email = this.signinValue.value.email;
    this.userObj.password = this.signinValue.value.password;

    if(this.signinValue.status == 'VALID'){
      this.router.navigateByUrl('employeeDashboard');
      this.isAvailable = true;
    }

    
  }

  get validate(): {[key: string]: AbstractControl}{
    return this.signinValue.controls;
  }

}
