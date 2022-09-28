import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { API2Service} from 'src/app/Service/api2.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-management',
  templateUrl: './image-management.component.html',
  styleUrls: ['./image-management.component.css']
})
export class ImageManagementComponent implements OnInit {

    imdata = new FormGroup({
    coopId:new FormControl()

  });
  //employee: new FormControl(),
 // public searchFilter: any = '';
  formValue !: FormGroup;
  employeeData: any =[];
  userData:any;
  showAdd !: boolean;
  showUpdate !: boolean;
  searchedKeyword: string;
  isUpdate = false;
  edit_id:  number 
 employees:any=[];
 public searchFilter: any = '';
  //formValue !: FormGroup;
 //employeeData !: any;
 sign: File;
 stamp: File;

 myFile:Blob;

  constructor(private emplService :API2Service) {
    this.getAllImage();
    

  }

  viewImg(url: any){
   // this.myFile=this.dataURItoBlob(url);
   // console.log(this.myFile)
   this.myFile = url
  }
  ngOnInit(): void {
    this.getAllEmployee()
   }

   onChange(event){
    this.stamp = event.target.files[0]
   }
   onChangeSign(event){
    this.sign = event.target.files[0]
   }

  
  submitForm() {
   const data: FormData = new FormData()
   data.append("sign",this.sign)
   data.append("stamp",this.stamp)
  //  alert("hel"+this.imdata)
   data.append("coopId", this.imdata.value.coopId)
    return this.emplService.postImage(data).subscribe(response => {
      console.log(response)
      window.location.reload()
    })
   
 }
  getAllEmployee(){
    this.emplService.getAllEmployee().subscribe({
      
      next:response=> {
        //  alert("no"+this.imdata)
        this.employees=response
          console.log(response)
      },
      error:err=>{
      
      },

    })
  }
  getAllImage() {
    this.emplService.getAllImage().subscribe(
      (resp) => {
        this.employeeData = resp
        console.log(resp);
      },
      (err) => {
        console.log(err);

      }
    );
  }

  dataURItoBlob(dataURI) {
    //var binary = atob(dataURI.split(',')[1]);
    var array = [];
  for (var i = 0; i < dataURI.length; i++) {
     array.push(dataURI.charCodeAt(i));
  }
 return new Blob([new Uint8Array(array)], {
    type: 'image/jpg'
});
}

  //  enter code here

 

  }
  

