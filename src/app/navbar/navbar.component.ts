import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(public authService : AuthService, private router: Router, private aletify: AlertifyService) { }

  ngOnInit(): void {
  }

  login()
  {
    // console.log("form submitted..");
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      //console.log("login başarılı..");
      this.aletify.success("login başarılı");
      this.router.navigate(['/members']);
    }, error => {
      //console.log("login hatalı..");
      //console.log(error);
      this.aletify.error(error);

    })

  }

  // html'de kullanılacak.. => *ngIf="loggedIn()" ve *ngIf="!loggedIn()"
  loggedIn(){

    //const token = localStorage.getItem("token");
    //return token ? true : false;
    return this.authService.loggedIn();
  }

  // html'de kullanılacak.. => (click)="logout()"
  logout(){
    localStorage.removeItem("token");

    //console.log("logout");
    this.aletify.warning("logout");

    this.model.username = ""; // html'de [(ngModel)]="model.username" olduğu için input da sıfırlanır..
    this.model.password = ""; // html'de [(ngModel)]="model.password" olduğu için input da sıfırlanır..

    this.router.navigate(['/home']);

  }

}
