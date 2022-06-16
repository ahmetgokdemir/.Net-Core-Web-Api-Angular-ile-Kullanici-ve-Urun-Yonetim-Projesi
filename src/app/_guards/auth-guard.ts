import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(){

    console.log("auth guard...");

    if(this.authService.loggedIn())
    {
      console.log("auth guard success");
      return true;
    }

    console.log("auth guard failed");
    this.router.navigate(['/home']);
    return false;
  }




}