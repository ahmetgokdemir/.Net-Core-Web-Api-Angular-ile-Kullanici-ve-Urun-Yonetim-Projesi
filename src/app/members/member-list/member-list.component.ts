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

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.getUsers(); // call function
  }

  getUsers() {

    // users, UserForListDTO'ya karşılık gelir.. çünkü serverapp'de var result = _mapper.Map<IEnumerable<UserForListDTO>>(users); kodu mevcut
    // dolayısıyla users: User[] = []; ile UserForListDTO eşleşir

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users[0].image.description);
    }, err => {
      this.alertify.error(err);
    })
  }

}