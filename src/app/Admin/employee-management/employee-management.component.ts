
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { APIService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();

  namePattern = "[a-zA-Z][a-zA-Z ]+";
  phonePattern = ('[- +()0-9]{9,9}');
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

  userData = new FormGroup({
    coopId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    middleName: new FormControl(),
    email: new FormControl(),
    phoneNo: new FormControl(),
    division: new FormControl(),
  });


  editData = new FormGroup({
    coopId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    middleName: new FormControl(),
    email: new FormControl(),
    phoneNo: new FormControl(),
    division: new FormControl(),
  });


  divisions: any = [];
  employees: any = [];

  public searchFilter: any = '';
  formValue !: FormGroup;
  employeeData: any =[];
  showAdd !: boolean;
  showUpdate !: boolean;
  searchedKeyword: string;
  isUpdate = false;
  edit_id:  number 



  constructor(private empService: APIService) {


    this.getAllEmployee();
  }
  ngOnInit(): void {
    this.getAllDivision()

    // this.dtOptions = {
    //   // Declare the use of the extension in the dom parameter
    //   pageLength: 5,
    //   lengthMenu: [[5,10,15,-1],[5,10,15,'All']],
    // };

  }
  add() {

    console.log(this.userData.value)
    return this.empService.postEmployee(this.userData.value).subscribe(response => {
      console.log(response)
      window.location.reload()
    })
  }
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(
      (resp) => {
        this.employeeData= resp
        // this.dtTrigger.next(this.employeeData)
        console.log(this.employeeData);
        setTimeout(()=>{
          $(document).ready(function () {
            $('.mydatatable').DataTable({
                // pagingType: 'full_numbers',
            });
        });
        
        }, 1);
      
        
      },
      (err) => {
        console.log(err);

      }
    );
  }
  getAllDivision() {
    this.empService.getAllDivision().subscribe({
      next: response => {
        this.divisions = response
        console.log(this.divisions)
      },
      error: er => {

      }
    })
  }
  deleteEmployeeDetail(employeeId) {
    if (confirm("Are you sure to delete this item ?")) {
      return this.empService.deleteEmployee(employeeId).subscribe({
        next: resp => {
          console.log(resp)
          alert("deleted this id=" + employeeId)
          window.location.reload()
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }
  editEmployeeDetail(employeeId) {
    this.empService.updateEmployee(employeeId, this.editData).subscribe({
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
  this.editData.controls['coopId'].setValue(row.coopId)
  this.editData.controls['firstName'].setValue(row.firstName)
  this.editData.controls['middleName'].setValue(row.middleName)
  this.editData.controls['lastName'].setValue(row.lastName)
  this.editData.controls['email'].setValue(row.email)
  this.editData.controls['phoneNo'].setValue(row.phone)
  this.editData.controls['division'].setValue(row.division.id)
  this.edit_id=row.id
  }

}
