# NccAngularTraining

## Time sheet App

## Requirement

### Create TimeSheet App

0. Finish component design before working on TaskManagement and Project Management Feature. Follow this expample:

``` html
// <!-- Task Page -->

<app-card>
  {/*
    CardComponent 
    Input: ???
    Output: ???
  */}

  <app-task-header>
    {/* TaskHeaderComponent
       Input: ???
       Output: ???
     */}
  </app-task-header>

  <app-task-list></app-task-list>
  {/* etc... */}
  <app-task-form></app-task-form>
</app-card>

```

1. Current timesheet app:

- Sample app: http://dev.timesheet.nccsoft.vn/
- Swagger: http://dev.timesheetapi.nccsoft.vn/swagger/index.html
- Account: `admindev/123qwe`

2. Reuse current backend api and rebuild 3 features: Authentication, Task Manager, Project Manager

- Login/Logout
- [Task Manager](http://dev.timesheet.nccsoft.vn/app/main/tasks)
- [Project Manager](http://dev.timesheet.nccsoft.vn/app/main/projects)

3. Feel free for choosing which design pattern, UI lib that you want but have to match:

- Great UI/UX and Try if we can make it better than the sample.
- Clear & Clean source code - Easy for understanding and maintaining.

### [NCC Angular basic checklist](https://github.com/angular-vietnam/100-days-of-angular)
https://github.com/angular-vietnam/100-days-of-angular
https://github.com/nccasia/ncc-angular

### [How to Write Cleaner React Code](https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/)
- https://angular.io/guide/styleguide#angular-coding-style-guide
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/
- https://itnext.io/clean-code-checklist-in-angular-%EF%B8%8F-10d4db877f74
- https://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_wiki/wikis/ncc-front-end-training.wiki?wikiVersion=GBwikiMaster&pagePath=%2FAbout%2FCoding%20Convention&pageId=1104&_a=edit
### [Working Process](https://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_wiki/wikis/ncc-front-end-training.wiki/448/About)

[View details](https://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_wiki/wikis/ncc-front-end-training.wiki/448/About)

## Available script

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
