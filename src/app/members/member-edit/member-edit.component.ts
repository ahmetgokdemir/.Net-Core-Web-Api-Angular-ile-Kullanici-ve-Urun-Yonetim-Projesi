import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
//import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  //user: User;
  user: any;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService) { } // AuthService kullanılmasının nedeni; login olan kullanıcının, token bilgisi içerisinden user.id bilgisini almak ..


/*
 constructor(private route: ActivatedRoute) { }
*/
  ngOnInit(): void {
    //this.getUser(); // call function.. artık resolver kullanılacak bu koda gerek yok..

    this.route.data.subscribe(data=> { // data: resolver dan gelen bilgi..
      this.user = data.user;  // user => router.ts den gelir.. resolve: {user: MemberEditResolver}
    })
  }


  // artık resolver kullanılacak bu koda gerek yok..
  // navbarda authService.decodedToken.unique_name kullandığımız gibi..
  /*getUser() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe(user=> {
      this.user = user;
    }, err => {
      this.alertify.error(err);
    })
  }
*/

// #editForm="ngForm" (ngSubmit)="updateUser()

// Form üzerinden girilen bilgiler, user: any; ile ngModel aracılığıyla bağlı .. dolayısıyla bilgi güncellemesini this.user üzerinden yapılabilinir..
updateUser() {

 // console.log(this.user);

  this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
  .subscribe(()=> {
    this.alertify.success("profiliniz güncellendi.");
  }, err => {
    this.alertify.error(err);
  })
}

}
