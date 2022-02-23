import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask, ETypeTask } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task/task.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.scss'],
})
export class TaskTabComponent implements OnInit {
  tasks: ITask[];
  subscription: Subscription;
  dataTask: ITask[] = [];
  displayedColumns: string[] = ['name', 'billable'];
  checked = false;

  allComplete: boolean = false;

  typeTask = [
    { value: ETypeTask.common, label: 'Common Task' },
    { value: ETypeTask.other, label: 'Other Task' },
    { value: ETypeTask.null, label: '' },
  ];

  @ViewChild(MatTable) table: MatTable<ITask>;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.subscription = this.taskService
      .getTaskAll()
      .subscribe((tasks: ITask[]) => {
        this.tasks = JSON.parse(JSON.stringify(tasks)).result;
      });
  }

  showTask(task: ITask) {
    this.dataTask.push(task);
    this.tasks = this.tasks.filter((data) => data.id !== task.id);
    this.table.renderRows();
  }

  hideTask(task: ITask) {
    this.dataTask = this.dataTask.filter((data) => data.id !== task.id);
    this.tasks.push(task);
    this.table.renderRows();
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
  }

  updateAllComplete() {
    this.allComplete = this.checked;
  }
}
