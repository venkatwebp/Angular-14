import {Component} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  router: any;
  formValue !: FormGroup;
  employeeObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  isAvailable: boolean = true;
  
  addEmp: boolean = false;
  isAdd: boolean = true;
  isUpdate: boolean = false;
  isEdit: boolean = false;

  constructor(
    private api: ApiService, 
    private formBuilder: FormBuilder,
    private route: Router
  ) { }


  ngOnInit() {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });

    this.getAllEmployee();

    console.log(this.route.url);
    
  }

  addEmployee(){
    this.formValue.reset();
    this.addEmp = true;
    this.isAdd = true;
    this.isUpdate = false;
  }

  postEmployeeDetails(){
    this.employeeObj.firstName = this.formValue.value.firstName;
    this.employeeObj.lastName = this.formValue.value.lastName;
    this.employeeObj.email = this.formValue.value.email;
    this.employeeObj.mobile = this.formValue.value.mobile;
    this.employeeObj.salary = this.formValue.value.salary;

    this.api.postEmployeeData(this.employeeObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added Successfully");
      this.formValue.reset();
      this.getAllEmployee();
    });
  }

  getAllEmployee(){
    this.api.getEmployeeData()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  delEmployee(row: any){
    this.api.deleteEmployeeData(row.id)
    .subscribe(res=>{
      alert('Employee deleted');
      this.getAllEmployee();
    })
  }

  editEmployee(row: any){
    this.addEmp = true;
    this.isUpdate = true;
    this.isAdd = false;
    this.isEdit = true;
    this.employeeObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails(){
    this.addEmp = true;
    this.isEdit = false;
    this.employeeObj.firstName = this.formValue.value.firstName;
    this.employeeObj.lastName = this.formValue.value.lastName;
    this.employeeObj.email = this.formValue.value.email;
    this.employeeObj.mobile = this.formValue.value.mobile;
    this.employeeObj.salary = this.formValue.value.salary;
    this.api.updateEmployeeData(this.employeeObj, this.employeeObj.id)
    .subscribe(res=>{
      alert('update successfully');
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

}