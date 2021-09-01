import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockInfoComponent } from './dashboard/stock-info/stock-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { Role } from './shared/auth.service';

const routes: Routes = [
  {path:'login', component: LoginComponent},  
  {path:'dashboard', component: DashboardComponent,canActivate: [AuthGuard], 
    children:[
      {path:'about', component: AboutComponent},
      {path:'contact', component: ContactComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} },
      {path:'stock-info', component: StockInfoComponent},
  ]},
  {path:'**', component: LoginComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
