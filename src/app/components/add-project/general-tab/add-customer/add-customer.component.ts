import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { CustomerSave } from 'src/app/model/customer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm: FormGroup;
  hide = true;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  customersave: CustomerSave[];

  public subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.addCustomerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      id: [, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.addCustomerForm.invalid) {
      return;
    }

    this.loading = true;
    this.customerService.customerSave(this.addCustomerForm.value).subscribe(
      (data) => {
        alert('save successful!');
        console.log(data);
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  get f() {
    return this.addCustomerForm.controls;
  }
}
