import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOption, MatOptionModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { AuthGuard } from './helpers/auth.guard';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProjectsComponent } from './features/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableCustomerComponent } from './components/table-customer/table-customer.component';
import { DataServiceService } from './service/dataService/data-service.service';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { TaskTabComponent } from './components/add-project/task-tab/task-tab.component';
import { TeamTabComponent } from './components/add-project/team-tab/team-tab.component';
import { GeneralTabComponent } from './components/add-project/general-tab/general-tab.component';
import { AddCustomerComponent } from './components/add-project/general-tab/add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LeftToolbarComponent,
    HomeComponent,
    ProjectsComponent,
    TableCustomerComponent,
    AddProjectComponent,
    TaskTabComponent,
    TeamTabComponent,
    GeneralTabComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSidenavModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [authInterceptorProviders, DataServiceService,AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
