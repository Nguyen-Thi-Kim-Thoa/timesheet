import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/model/customer';
import { Input } from '@angular/core';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss'],
})
export class TableCustomerComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  status: number;

  constructor(private projectService: ProjectService) {}

  @Input() customer: ICustomer;

  ngOnInit(): void {}

  active(status: number) {
    if (status == 0) return true;
    else return false;
  }
}
