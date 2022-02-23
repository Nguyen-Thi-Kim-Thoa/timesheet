import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', redirectTo:'/login', pathMatch: 'full'},
  { path:'home', component:HomeComponent ,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
