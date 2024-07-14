import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; 
import { StudentRecordsComponent } from './student-records/student-records.component';
import { StudentsComponent } from './students/students.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [  
    {
        path:'landing',
        component:LandingComponent,
        canMatch:[AuthGuard]
    },
    {
        path:'students',
        component:StudentsComponent,
        canMatch:[AuthGuard]
    },
    {
        path:'student-records',
        component:StudentRecordsComponent,
        canMatch:[AuthGuard]
    },
    {
        path:'login',
        component:LoginComponent
    }
];
