import { Component, OnInit } from '@angular/core';
//import { User } from 'src/app/_models/user';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
//import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  user: any; //   user: User; yerine any kullandım..
  //user: User;
  followText: string = "Takip Et";


  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

    // route: ActivatedRoute => members/3 'daki 3 id değerini almamızı sağlar..

  ngOnInit(): void {
    // this.getUser(); // call function.. artık resolver kullanılacak bu koda gerek yok..

    this.route.data.subscribe(data=> { // data: resolver dan gelen bilgi..
      this.user = data.user;  // user => router.ts den gelir.. resolve: {user: MemberDetailsResolver}
    })

  }

  /* artık resolver kullanılacak bu koda gerek yok..
   members/3
   + işareti sayesinde params['id'], int'e çevrilir..
  getUser() {

         user, UserForDetailsDTO'ya karşılık gelir.. çünkü serverapp'de var result = _mapper.Map<UserForDetailsDTO>(user); kodu mevcut
     dolayısıyla users: User[] = []; ile UserForListDTO eşleşir


    this.userService.getUser(+this.route.snapshot.params['id']).subscribe(user => {
      this.user = user;
    }, err => {
      this.alertify.error(err);
    });
  }
  */

  // this.authService.decodedToken.nameid => followerId (login olan ve takipçi kişi), userId: number(html sayfası üzerinden gelecek/ takip edilen kişi)
  // followUser(userId: number) kullanmadan..
  followUser() {
    this.userService.followUser(this.authService.decodedToken.nameid, this.user.id)
        .subscribe(result => {
          this.alertify.success(this.user.name + ' kullanıcısını takip ediyorsunuz');
          this.followText = "Takip Ediyorsunuz";
        }, err => {
          this.alertify.error(err);
        })
  }


}
