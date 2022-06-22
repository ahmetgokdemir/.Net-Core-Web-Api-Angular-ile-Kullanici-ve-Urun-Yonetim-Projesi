import { Routes } from "@angular/router"; // ** Routes
import { FriendListComponent } from "./friend-list/friend-list.component";
import { HomeComponent } from "./home/home.component";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuard } from "./_guards/auth-guard";

export const appRoutes: Routes = [

  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'members/:id', component: MemberDetailsComponent, canActivate: [AuthGuard] },
  { path:'friends', component: FriendListComponent, canActivate: [AuthGuard] },
  { path:'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path:'**', component: NotfoundComponent } // yukarıdakilerin haricinde bir url girilirse..


]
