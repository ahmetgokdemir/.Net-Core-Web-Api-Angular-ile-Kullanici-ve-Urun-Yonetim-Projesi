import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {};

  constructor(private authService : AuthService, private aletify: AlertifyService,
    private route: Router) { }

  ngOnInit(): void {
  }

  register(){
    // console.log(this.model);
    this.authService.register(this.model).subscribe(()=>{
      // console.log("kullanıcı oluşturuldu..");
      this.aletify.success("kullanıcı oluşturuldu..");
    }, error => {
      // console.log(error);
      this.aletify.error(error);
    } , () => {  // kullanıcı oluşturulduktan sonra kullanıcıyı yönlendirme işlemi.. yönlendirmeden önce login olmalı..
      this.authService.login(this.model).subscribe(()=> {
        this.route.navigate(['/members']);
      })
    }
    );

  }

}
