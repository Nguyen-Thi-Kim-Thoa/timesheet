import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenUser } from 'src/app/model/authen-user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
//import { AuthenUser } from 'src/app/model/authen-user';
import { map } from 'rxjs/operators';
import { access } from 'fs';
const API_URL = environment.API_URL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private userSubject: BehaviorSubject<AuthenUser>;
  public user: Observable<AuthenUser>;
  authenUser: AuthenUser;
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<AuthenUser>(
      JSON.parse(JSON.stringify(localStorage.getItem('accessoken')))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  login(authenUser: AuthenUser): Observable<any> {
    return this.http
      .post(API_URL + '/api/TokenAuth/Authenticate', authenUser, httpOptions)
      .pipe(
        map((user) => {
          const a = JSON.parse(JSON.stringify(user));

          const b = Object.values(a.result)[0];
          localStorage.setItem('accessoken', JSON.stringify(b));

          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
}
