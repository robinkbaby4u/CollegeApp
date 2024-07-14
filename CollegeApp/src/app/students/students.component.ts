import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormBuilder,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  constructor()
  {
    
  }

}
