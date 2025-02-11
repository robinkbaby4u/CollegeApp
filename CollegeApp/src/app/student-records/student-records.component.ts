import { Component, OnInit, WritableSignal, computed, signal, Signal } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators, FormsModule } from "@angular/forms";
import {  NgbModal, NgbDatepickerModule, NgbHighlight, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ColDef, GridApi} from "ag-grid-community";
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-records',
  standalone: true,
  imports:[AgGridModule, ReactiveFormsModule,
    CommonModule, NgbDatepickerModule,NgbModule,
    NgbHighlight, RouterModule, FormsModule, ],
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {
    gridApi:any;

    defaultColDef = {
      sortable: true,
      filter: true
    };

    columnDefs:ColDef[]=[
      {field:"name"},
      {field:"country"},
      {field:"city"},
      {field:"subject"}
    ];

    rowData = [];

    apiResponse: any = [
      {
        "name": "Pamela Feeney",
        "country": "Paraguay",
        "state": "NH",
        "passportDeclaration": "false",
        "fitnessDeclaration": "false",
        "courseName": "BSc",
        "subject": "Maths",
        "date":"Fri Oct 11 0030 10:00:10 GMT+0553 (India Standard Time)",
        "city": "Fort Mustafastead",
        "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg",
        "street": "64282 Hauck Drives",
        "address2": "Apt. 280",
        "zip": "84106-6709",
        "phone": "389-600-8245 x581",
        "email": "Donald.Carter@gmail.com",
        "website": "http://immaterial-eyestrain.biz"
      },
      {
        "name": "Ms. Jasmine Klein",
        "country": "Falkland Islands (Malvinas)",
        "state": "KS",
        "passportDeclaration": "true",
        "fitnessDeclaration": "true",
        "courseName": "BSc",
        "subject": "Maths",
        "date":"Wed Jul 21 0038 03:44:39 GMT+0553 (India Standard Time)",
        "city": "Destineystead",
        "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/77.jpg",
        "street": "205 Linwood Keys",
        "address2": "Suite 772",
        "zip": "39920-7589",
        "phone": "857.755.4762 x4394",
        "email": "Gwendolyn93@gmail.com",
        "website": "http://haunting-volume.info"
      },
      {
        "name": "Constance Durgan DDS",
        "country": "Republic of Korea",
        "state": "SC",
        "passportDeclaration": "false",
        "fitnessDeclaration": "false",
        "courseName": "BSc",
        "subject": "Maths",
        "date":"Wed Dec 03 0053 07:32:11 GMT+0553 (India Standard Time)",
        "city": "Lake Sofia",
        "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg",
        "street": "95752 Lindgren Corners",
        "address2": "Apt. 429",
        "zip": "12255-8472",
        "phone": "1-753-886-7212 x2333",
        "email": "Dena67@yahoo.com",
        "website": "http://petty-nursing.org"
      },
      {
        "name": "Nichole Stiedemann III",
        "country": "Andorra",
        "state": "TN",
        "passportDeclaration": "false",
        "fitnessDeclaration": "false",
        "courseName": "BSc",
        "subject": "Maths",
        "date":"Mon Jun 23 0064 10:33:11 GMT+0553 (India Standard Time)",
        "city": "Thornton",
        "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg",
        "street": "6749 Stuart Parkways",
        "address2": "Suite 349",
        "zip": "57530",
        "phone": "1-705-881-5262 x7961",
        "email": "Alta_McCullough@yahoo.com",
        "website": "https://grimy-exposure.name"
      }
    ];

    studentDetailsForm:FormGroup;

    constructor(private fb:FormBuilder,
      private modalService:NgbModal
    )
    {
      this.studentDetailsForm=this.fb.group({
        name:this.fb.control("",[Validators.required]),
        country:this.fb.control("",[Validators.required]),
        state:this.fb.control("",[Validators.required]),
        passportDeclaration:this.fb.control("",[Validators.required]),
        fitnessDeclaration:this.fb.control("",[Validators.required]),
        courseName:this.fb.control("",[Validators.required]),
        subject:this.fb.control("",[Validators.required]),
        date:this.fb.control("",[Validators.required]),
        city:this.fb.control("",[Validators.required]),
        street:this.fb.control("",[Validators.required]),
        address2:this.fb.control("",[Validators.required]),
        zip:this.fb.control("",[Validators.required]),
        email:this.fb.control("",[Validators.required]),
        website:this.fb.control("",[Validators.required])
      });
    }

    get nameControl():FormControl{
      return this.studentDetailsForm.get("name") as FormControl;
    }

    get countryControl():FormControl{
      return this.studentDetailsForm.get("country") as FormControl;
    }

    get stateControl():FormControl{
      return this.studentDetailsForm.get("state") as FormControl;
    }
    
    get passportDeclarationControl():FormControl{
      return this.studentDetailsForm.get("passportDeclaration") as FormControl;
    }
    
    get fitnessDeclarationControl():FormControl{
      return this.studentDetailsForm.get("fitnessDeclaration") as FormControl;
    }
    
    get courseNameControl():FormControl{
      return this.studentDetailsForm.get("course") as FormControl;
    }
    
    get subjectControl():FormControl{
      return this.studentDetailsForm.get("subject") as FormControl;
    }
    
    get dateControl():FormControl{
      return this.studentDetailsForm.get("date") as FormControl;
    }
    
    get cityControl():FormControl{
      return this.studentDetailsForm.get("city") as FormControl;
    }
    
    get streetControl():FormControl{
      return this.studentDetailsForm.get("street") as FormControl;
    }
    
    get address2Control():FormControl{
      return this.studentDetailsForm.get("address2") as FormControl;
    }

    
    get zipControl():FormControl{
      return this.studentDetailsForm.get("zip") as FormControl;
    }
    
    get emailControl():FormControl{
      return this.studentDetailsForm.get("email") as FormControl;
    }
    
    get websiteControl():FormControl{
      return this.studentDetailsForm.get("website") as FormControl;
    }

    onGridReady(params:any)
    {
      this.gridApi=params?.api;
    }

    // ngOnInit() {
    //   fetch(this.apiResponse)
    //     .then(result => result.json())
    //     .then(rowData => this.rowData = rowData);
    // }

    open(content:any)
    {
      this.modalService.open(content).result.then(
        (result)=>{
            // Closing
        },
        (reason)=>{
            // Dismising
        }
      )
    }

    checkIfSelected()
    {
      return true;      
    }

    onOpenViewForm(studentForm:any)
    {
      const selectedRow=this.gridApi?.selectedRow()[0];
      this.studentDetailsForm.patchValue(selectedRow);
      this.studentDetailsForm.disable();
      this.modalService.open(studentForm,{ariaLabelledBy:"model of view records"}).result.then(
        (result)=>{

        },
        (reason)=>{

        }
      );
    }

    onDeletedRecord(studentForm:any)
    {

    }

    clearSelection()
    {

    }


    
}
