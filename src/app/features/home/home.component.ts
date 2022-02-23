import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProjectService } from 'src/app/service/project/project.service';
import { IProject } from 'src/app/model/project';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {
  loading = false;
  projects:  IProject[];
  constructor(private dataService: DataServiceService, private router: Router, private projectService:ProjectService) { }

  ngOnInit(): void {
    
  }

  Logout() {
    this.dataService.logout();
  }

}
