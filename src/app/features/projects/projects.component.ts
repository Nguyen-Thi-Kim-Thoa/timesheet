import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/model/customer';
import { ProjectService } from 'src/app/service/project/project.service';
import { IProject } from '../../model/project';
import { IParam } from '../../model/project';
import { Output, EventEmitter } from '@angular/core';
import { EFilterOption } from 'src/app/model/filter';
import {MatDialog} from '@angular/material/dialog';
import { AddProjectComponent } from 'src/app/components/add-project/add-project.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  selected = EFilterOption.All;
  options = [
    { value: EFilterOption.All, label: 'All projects' },
    { value: EFilterOption.Active, label: 'Active projects' },
    { value: EFilterOption.Deactive, label: 'Deactive projects' },
  ];

  public subscription: Subscription[] = [];

  projects: IProject[] = [];
  param: IParam;
  customer: ICustomer[] = [];
  customerList = ([] = new Array());

  @Output() filterEmit = new EventEmitter();
  constructor(public projectService: ProjectService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscription.push(
      this.projectService.getAll().subscribe((projects) => {
        this.projects = JSON.parse(JSON.stringify(projects)).result;
        this.customerList = Array.from(
          new Set(this.projects.map((project) => project.customerName))
        );
        for (let i = 0; i < this.customerList.length; i++) {
          const customerName = this.customerList[i];
          const projectslist = this.projects.filter((data: IProject) => {
            return data.customerName == this.customerList[i];
          });
          this.customer.push({
            customerName: customerName,
            projectslist: projectslist,
          });
        }
      })
    );
  }

  onclick(select: string) {
    this.customer = [];
    const search = '';
    this.projectService.setSelect(select);
    this.subscription.push(
      this.projectService
        .getProjectAll(select, search)
        .subscribe((projects: IProject[]) => {
          this.projects = JSON.parse(JSON.stringify(projects)).result;
          this.customerList = Array.from(
            new Set(this.projects.map((project) => project.customerName))
          );
          for (let i = 0; i < this.customerList.length; i++) {
            const customerName = this.customerList[i];
            const projectslist = this.projects.filter((data: IProject) => {
              if (select === EFilterOption.Active) {
                return (
                  data.status === 0 && data.customerName == this.customerList[i]
                );
              } else if (select === EFilterOption.Deactive) {
                return (
                  data.status === 1 && data.customerName == this.customerList[i]
                );
              } else {
                return data.customerName == this.customerList[i];
              }
            });

            this.customer.push({
              customerName: customerName,
              projectslist: projectslist,
            });
          }
         
        })
        
    );
  }



  openDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
