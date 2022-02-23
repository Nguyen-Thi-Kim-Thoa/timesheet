import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { DataServiceService } from '../../service/dataService/data-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceService
) { 
   
    if (this.dataService.userValue) { 
        this.router.navigate(['/']);
    }
}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userNameOrEmailAddress: ['', Validators.required],
      password: ['', Validators.required]
    });

   
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
}


get f() { return this.loginForm.controls; }

onSubmit() {
    this.submitted = true;

    
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.dataService.login(this.loginForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
  
  reloadPage(): void {
    window.location.reload();
  }
    
}