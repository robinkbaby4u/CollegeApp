import { Component } from '@angular/core';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
 


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgbHighlight,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  filter:FormControl;
  sidebarExpanded:boolean=true;
  students: Array<any>=[
    
    {
      "name":"Emma Watson",
      "country":"United Kingdom",
      "studentImage":"https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?rs=1&pid=ImgDetMain",
      "state":"Test state 1",
      "city":"London",
      "physics":"40",
      "chemistry":"46",
      "maths":"34",
      "computer":"37"
    },
    {
      "name":"Kate Winslet",
      "country":"United States of America",
      "studentImage":"https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/businessman.png",
      "state":"Test state 2",
      "city":"Washington",
      "physics":"16",
      "chemistry":"20",
      "maths":"12",
      "computer":"14"
    },
    {
      "name":"Nicholas Cage",
      "country":"Ireland",
      "studentImage":"https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
      "state":"Test state 3",
      "city":"Dublin",
      "physics":"43",
      "chemistry":"46",
      "maths":"42",
      "computer":"37"
    },
    {
      "name":"Harison Ford",
      "country":"France",
      "studentImage":"https://image.freepik.com/free-vector/user-icon_126283-435.jpg",
      "state":"Test state 4",
      "city":"Paris",
      "physics":"70",
      "chemistry":"64",
      "maths":"73",
      "computer":"46"
    }
  ]

  constructor(private fb:FormBuilder)
  {
    this.filter=this.fb.control("",{nonNullable:true});
  }
}
