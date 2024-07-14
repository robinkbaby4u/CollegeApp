import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginFormModel:any={
    username:"",
    password:""
  }

  constructor(public authService:AuthService,
    public router:Router
  ){
  }

  login()
  {
    var userName=this.loginFormModel.username;
    var password=this.loginFormModel.password;
    this.authService.logIn().subscribe(
      ()=>{
        const redirectUrl="dashboard";
        const navigationExtras:NavigationExtras={
          queryParamsHandling:'preserve',
          preserveFragment:true
        };

        this.router.navigate([redirectUrl],navigationExtras);
      }
    );
  }

  logout()
  {
    this.authService.logOut();
  }
}
