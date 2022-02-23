import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer, CustomerSave } from 'src/app/model/customer';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerAll(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Customer[]>(
      API_URL + '/api/services/app/Customer/GetAll',
      {
        headers: headers
      }
    );
  }

  customerSave(customer:CustomerSave){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CustomerSave[]>(
      API_URL + '/api/services/app/Customer/Save',
      {
        headers: headers
      }
    );
  }
}
