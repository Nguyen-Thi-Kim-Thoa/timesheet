import { Injectable } from '@angular/core';
import { IProject, IParam } from 'src/app/model/project';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public selected = new BehaviorSubject<string>("");
  public currentSelected = this.selected.asObservable();
  constructor(private http: HttpClient) {}

  setSelect(option: string) {
    this.selected.next(option);
  }

  getProjectAll(status: string, search: string): Observable<IProject[]> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();

    if (status != null) params = params.set('status', status.toString());
    if (search != null) params = params.set('search', search.toString());
    return this.http.get<IProject[]>(
      API_URL + '/api/services/app/Project/GetAll',
      {
        headers: headers,
        params: params,
      }
    );
  }

  getAll(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IProject[]>(
      API_URL + '/api/services/app/Project/GetAll',
      {
        headers: headers
      }
    );
  }
}
