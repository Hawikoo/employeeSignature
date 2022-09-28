import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Api1Service } from 'src/app/Service/api1.service';
import { UserModel } from './user-management.model';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  namePattern = "[a-zA-Z][a-zA-Z ]+";
  phonePattern = ('[- +()0-9]{9,9}');
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  users: any
  testData = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    employee: new FormControl(),
  })
  editData = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
   
    email: new FormControl(),
    
    employee: new FormControl(),
  });

  employees: any = [];

  public searchFilter: any = '';
  formValue !: FormGroup;
  // userData !: any;
  // showAdd !: boolean;
  // showUpdate !: boolean;
   searchedKeyword: string;
   isUpdate = false;
   edit_id:  number 




  constructor(private emplyService: Api1Service) {

    this.getAllUser();
  }
  ngOnInit(): void {
   this.getAllEmployee()

  

  }
  add() {

    console.log(this.testData.value)
    return this.emplyService.postUser(this.testData.value).subscribe(response => {
      // console.log(response)
      window.location.reload()
    },
          (err) => {
            console.log(err);
          })
  }


  getAllUser() {
    this.emplyService.getAllUser().subscribe(
      (resp) => {
        this.users= resp
        console.log(resp);
      },
      (err) => {
        console.log(err);

      }
    );
  }
  getAllEmployee() {
    this.emplyService.getAllEmployee().subscribe({
      next: response => {
          // alert("no"+this.users)
        this.employees = response
        console.log(this.employees)
      },
      error: er => {

      }
    })
  }
  insert(){
   
  }
  deleteUserDetail(userId) {
    if (confirm("Are you sure to delete this item ?")) {
      return this.emplyService.deleteUser(userId).subscribe({
        next: resp => {
          console.log(resp)
          alert("deleted this id=" + userId)
          window.location.reload()
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }
  editUserDetail(employeeId) {
    this.emplyService.updateUser(employeeId, this.editData).subscribe({
      next: resp => {
        console.log(resp)
        this.isUpdate = false
        window.location.reload()

      }, error: err => {
        console.log(err)
        this.isUpdate = false

      }
    })
  }

  changeUpdate(row) {
  this.editData.controls['password'].setValue(row.coopId)
  this.editData.controls['username'].setValue(row.username)
  
  this.editData.controls['email'].setValue(row.email)
  this.editData.controls['employee'].setValue(row.employee.id)
 
  this.edit_id=row.id
  }

}