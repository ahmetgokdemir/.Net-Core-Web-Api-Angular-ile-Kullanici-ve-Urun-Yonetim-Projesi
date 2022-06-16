import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt"; // *** ClientApp> npm install @auth0/angular-jwt


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:5000/api/user/";

  jwtHelper = new JwtHelperService();
  decodedToken: any;


  constructor(private http:HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl+'login',model).pipe(
      map((response:any) => {
        const result = response;
        if(result){
          // console.log(response.token);
          localStorage.setItem("token",result.token); // response:any yazılmaz ise => result.token hata verir..

          // this.decodedToken = this.jwtHelper.decodeToken(result.token);
          // bunu kullanırsak sayfa refresh olunca bu bilgi kaybedilir o yüzden app.component kısmında set edildi.. dolayısıyla bu koda gerek yok..
          this.decodedToken = this.jwtHelper.decodeToken(result.token);  // logout olup sayfayı refresh edince username bilgisi gelmiyor o yüzden tekrar bu kod aktif edildi..

          // const expirationDate = this.jwtHelper.getTokenExpirationDate(result.token);
          // const isExpired = this.jwtHelper.isTokenExpired(result.token);

          console.log(this.decodedToken);
        }

      })
    );

    /*
      [HttpPost("login")]   // => localhost:5000/api/User/login
      public async Task<ActionResult> Login(UserForLoginDTO model)
    */

  }

  register(model: any){
    return this.http.post(this.baseUrl+'register',model);
  }

  // auth-guard.ts kısmında kullanılacak..
  loggedIn(){
    const token:any = localStorage.getItem("token");

    // 1.yol
    // return token?true:false;

    // 2.yol
    return !this.jwtHelper.isTokenExpired(token); // token:any verilmez ise hata veriyor..

    // this.jwtHelper.isTokenExpired(token); => token süresi geçmiş demek
  }

}
