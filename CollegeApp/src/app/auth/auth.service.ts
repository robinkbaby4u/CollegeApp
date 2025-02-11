import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
    providedIn:"root"
})

export class AuthService
{
    isLoggedIn:boolean=true;

    redirectUrl:string|null=null;

    logIn():Observable<boolean>{
            return of(true).pipe(
                delay(1000),
                tap(()=>this.isLoggedIn=true)
            );
    }

    logOut():void{
       this.isLoggedIn=false;
    }
}