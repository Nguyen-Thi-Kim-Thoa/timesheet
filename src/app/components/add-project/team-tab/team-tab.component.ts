import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { Subscription } from 'rxjs';
import { IUser, EBranch, ETypeUser, ELevel, IFilter } from 'src/app/model/user';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-team-tab',
  templateUrl: './team-tab.component.html',
  styleUrls: ['./team-tab.component.scss'],
})
export class TeamTabComponent implements OnInit {
  dataSource: IUser[] = [];
  displayedColumns: string[] = ['name'];
  public subscription: Subscription;
  users: IUser[];

  @ViewChild(MatTable) table: MatTable<IUser>;

  branch: number = EBranch.All;
  type: number = ETypeUser.All;
  level: number = ELevel.All;

  branchs = [
    { value: EBranch.HaNoi, label: 'HN' },
    { value: EBranch.DaNang, label: 'DN' },
    { value: EBranch.HoChiMinh, label: 'HCM' },
    { value: EBranch.Vinh, label: 'Vinh' },
    { value: EBranch.All, label: 'All' },
  ];

  types = [
    { value: ETypeUser.Staff, label: 'Staff' },
    { value: ETypeUser.InternShip, label: 'InternShip' },
    { value: ETypeUser.Collaborator, label: 'Collaborator' },
    { value: ETypeUser.All, label: 'All' },
  ];

  levels = [
    { value: ELevel.Intern0, label: 'Intern_0' },
    { value: ELevel.Intern1, label: 'Intern_1' },
    { value: ELevel.Intern2, label: 'Intern_2' },
    { value: ELevel.Prefresher, label: 'Prefresher' },
    { value: ELevel.Fresher0, label: 'Fresher-' },
    { value: ELevel.Fresher1, label: 'Fresher' },
    { value: ELevel.Fresher2, label: 'Fresher+' },
    { value: ELevel.Junior0, label: 'Junior-' },
    { value: ELevel.Junior1, label: 'Junior' },
    { value: ELevel.Junior2, label: 'Junior+' },
    { value: ELevel.Middle0, label: 'Middle-' },
    { value: ELevel.Middle1, label: 'Middle' },
    { value: ELevel.Middle2, label: 'Middle+' },
    { value: ELevel.Senior0, label: 'Senior-' },
    { value: ELevel.Senior1, label: 'Senior' },
    { value: ELevel.Senior2, label: 'Senior+' },
    { value: ELevel.All, label: 'All' },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService
      .getUserNotPagging()
      .subscribe((users: IUser[]) => {
        this.users = JSON.parse(JSON.stringify(users)).result;
      });
  }

  filterUser() {
    this.subscription = this.userService
      .getUserNotPagging()
      .subscribe((users: IUser[]) => {
        users = JSON.parse(JSON.stringify(users)).result;
        this.users = users.filter(
          (user) =>
            (user.branch === this.branch || this.branch === EBranch.All) &&
            (user.level === this.level || this.level === ELevel.All) &&
            (user.type === this.type || this.type === ETypeUser.All)
        );
      });
  }

  addMember(member: IUser) {
    this.dataSource.push(member);
    this.users = this.users.filter((user) => user !== member);
    this.table.renderRows();
  }

  deleteMember(member: IUser) {
    this.users.push(member);
    this.dataSource = this.dataSource.filter((user) => user != member);
    this.table.renderRows();
  }
}
