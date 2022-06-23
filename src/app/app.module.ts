import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth-guard';
import { ErrorInterceptor } from './_services/error.intercaptor';
import { JwtModule } from "@auth0/angular-jwt";
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';


export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    RegisterComponent,
    MemberListComponent,
    FriendListComponent,
    HomeComponent,
    MessagesComponent,
    NotfoundComponent,
    MemberDetailsComponent,
    PhotoGalleryComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //  ngModel kullanabilmek için FormModule'ü app.module.ts'e eklenmeli. ***
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"], // 5000 ve diğer url'ler için token gönderilecek..
        disallowedRoutes: ["localhost:5000/api/auth"] // token bilgisi göndermeyeceğimiz kısım
      },
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlertifyService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, // interceptor'ı uygulamaya dahil etmek.. Servise tanımlaması.. multi: true birden fazla interceptor kullanımına izin verildi..
    AuthGuard,
    MemberEditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
