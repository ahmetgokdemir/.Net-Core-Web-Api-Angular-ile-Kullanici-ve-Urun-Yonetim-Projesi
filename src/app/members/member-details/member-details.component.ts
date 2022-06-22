import { Component, OnInit } from '@angular/core';
//import { User } from 'src/app/_models/user';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
//import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  user: any; //   user: User; yerine any kullandım..
  //user: User;

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

    // route: ActivatedRoute => members/3 'daki 3 id değerini almamızı sağlar..

  ngOnInit(): void {
    this.getUser(); // call function..
  }

  // members/3
  // + işareti sayesinde params['id'], int'e çevrilir..
  getUser() {

        // user, UserForDetailsDTO'ya karşılık gelir.. çünkü serverapp'de var result = _mapper.Map<UserForDetailsDTO>(user); kodu mevcut
    // dolayısıyla users: User[] = []; ile UserForListDTO eşleşir


    this.userService.getUser(+this.route.snapshot.params['id']).subscribe(user => {
      this.user = user;
    }, err => {
      this.alertify.error(err);
    });
  }

}
