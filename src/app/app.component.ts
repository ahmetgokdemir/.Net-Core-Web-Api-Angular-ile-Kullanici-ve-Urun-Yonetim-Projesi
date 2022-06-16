import { Component, OnInit } from '@angular/core';
import { Model } from './Model';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt"; // *** ClientApp> npm install @auth0/angular-jwt => jwtHelper = new JwtHelperService(); kullanabilmek için



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SocialApp';
  jwtHelper = new JwtHelperService();


  constructor(public authService : AuthService){}

  ngOnInit() {
    const token = localStorage.getItem("token");
    if(token){

      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      // bunu burada (app.component'de) genel bir yerde set ederek sayfa refresh olduğunda data kaybolmaz..
      // this.authService.decodedToken => auth.services.ts'den gelir..

      console.log(this.authService.decodedToken);
    }

  }

}
