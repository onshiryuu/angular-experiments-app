import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AppErrorHandler } from './common/app-error-handler';
import { PostsService } from './services/posts.service';
import { FollowersService } from './services/followers.service';
import { ArchiveService } from './services/archive.service';
import { CustomTitleCase } from './customtitlecase.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngenieurComponent } from './ingenieur/ingenieur.component';
import { IngenieurService } from './services/ingenieur.service';
import { GiverootbeerComponent } from './giverootbeer/giverootbeer.component';
import { InputFormatDirective } from './input-format.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { ContactformComponent } from './contactform/contactform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ExpertiseformComponent } from './expertiseform/expertiseform.component';
import { ChangepasswordformComponent } from './changepasswordform/changepasswordform.component';
import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FollowerProfileComponent } from './follower-profile/follower-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchivemonthComponent } from './archivemonth/archivemonth.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    IngenieurComponent,
    GiverootbeerComponent,
    CustomTitleCase,
    InputFormatDirective,
    AccordionComponent,
    ContactformComponent,
    RegisterformComponent,
    LoginformComponent,
    ExpertiseformComponent,
    ChangepasswordformComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    FollowerProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    ArchivemonthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: []
    }
    })
  ],
  providers: [
    IngenieurService,
    PostsService,
    FollowersService,
    ArchiveService,
    OrderService,
    AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    JwtHelperService,
    fakeBackendProvider,
    HttpClientTestingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}
