import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ITask } from 'src/app/model/task';


const API_URL = environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTaskAll(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ITask[]>(
      API_URL + '/api/services/app/Task/GetAll',
      {
        headers: headers
      }
    );
  }

}
