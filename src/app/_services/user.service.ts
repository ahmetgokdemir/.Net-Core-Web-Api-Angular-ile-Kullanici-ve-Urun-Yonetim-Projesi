import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    baseUrl: string = "http://localhost:5000/api/users/";
    constructor(private http: HttpClient) { }

    /*getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }*/
    getUsers(followParams?: any, userParams?: any): Observable<User[]> { // : any eklendi

      let params = new HttpParams(); // query string bilgilerini bu obje aracılığıyla gönderilir..

      if(followParams === 'followers') {
          params = params.append('followers','true'); // api/users?followers=true (url)
      }

      if(followParams === 'followings') {
          params = params.append('followings','true'); // api/users?followings=true (url)
      }

      if(userParams!=null) {
        if(userParams.gender!=null)
            params = params.append('gender',userParams.gender);
        if(userParams.minAge!=null)
            params = params.append('minAge',userParams.minAge);
        if(userParams.maxAge!=null)
            params = params.append('maxAge',userParams.maxAge);
        if(userParams.country!=null)
            params = params.append('country',userParams.country);
        if(userParams.city!=null)
            params = params.append('city',userParams.city);
    }

      return this.http.get<User[]>(this.baseUrl, {params: params});
  }

    // http://localhost:5000/api/users/2
    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.baseUrl + id);
    }

    // request'in body kısmına user eklenir..
    updateUser(id: number, user: User) {
      return this.http.put(this.baseUrl + id, user);
  }

  followUser(followerId: number, userId: number) {
    return this.http.post(this.baseUrl + followerId + '/follow/' + userId,{}); // [HttpPost("{followerUserId}/follow/{userId}")]
}

}
