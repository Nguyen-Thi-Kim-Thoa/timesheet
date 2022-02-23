import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { Customer } from 'src/app/model/customer';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.scss'],
})
export class GeneralTabComponent implements OnInit {
  addProjectForm: FormGroup;
  hide = true;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  customers: Customer[];

  public subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.subscription = this.customerService
      .getCustomerAll()
      .subscribe((customers: Customer[]) => {
        this.customers = JSON.parse(JSON.stringify(customers)).result;
      });
  }

  get f() {
    return this.addProjectForm.controls;
  }

  openDialogCustomer() {
    const dialogRef = this.dialog.open(AddCustomerComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
