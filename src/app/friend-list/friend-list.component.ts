import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
// import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  users: User[] = []; // = [] eklendi
  followParams: string = "followings"; // takip edilen kişiler
  /*
    if (IsFollowings)
    {
      return user.Followers // login olanın takipçi olduğu liste (takip eden)
  */

  constructor(private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // this.followParams
  getUsers() {
    this.userService.getUsers(this.followParams).subscribe(users => {
      this.users = users;
    }, err => {
      this.alertify.error(err);
    })
  }
}
