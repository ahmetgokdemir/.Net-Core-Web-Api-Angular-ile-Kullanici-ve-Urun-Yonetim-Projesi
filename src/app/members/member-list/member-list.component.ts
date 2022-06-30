import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { AlertifyService } from '../../services/alertify.service';
//import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[] = []; // = [] kısmını ben ekledim..
  public loading = false;

  // query string
  userParams:any = {}; // [(ngModel)]="userParams.minAge" ile data bind edildi ve getUsers(null,this.userParams) ile data push edildi..

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    //this.userParams.orderby = "lastactive"; // default value set edildi..
    // this.userParams.gender = "female";
    // this.userParams.minAge = 20;
    // this.userParams.maxAge = 40;
    this.getUsers(); // call function
  }

  getUsers() {

    this.loading = true;



    // users, UserForListDTO'ya karşılık gelir.. çünkü serverapp'de var result = _mapper.Map<IEnumerable<UserForListDTO>>(users); kodu mevcut
    // dolayısıyla users: User[] = []; ile UserForListDTO eşleşir

    this.userService.getUsers(null,this.userParams).subscribe(users => {
      this.loading = false;

      this.users = users;
      console.log(users[0].image.description);
    }, err => {
      this.loading = false;

      this.alertify.error(err);
    })
  }

}
