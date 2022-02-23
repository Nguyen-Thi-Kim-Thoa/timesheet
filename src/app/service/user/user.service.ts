import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from 'src/app/model/user';


const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUserNotPagging(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IUser[]>(
      API_URL + '/api/services/app/User/GetUserNotPagging',
      {
        headers: headers
      }
    );
  }
}
