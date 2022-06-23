import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    baseUrl: string = "http://localhost:5000/api/users/";
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }

    // http://localhost:5000/api/users/2
    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.baseUrl + id);
    }

    // request'in body kısmına user eklenir..
    updateUser(id: number, user: User) {
      return this.http.put(this.baseUrl + id, user);
  }

}
