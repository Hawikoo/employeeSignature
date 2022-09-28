import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './Admin/employee-management/employee-management.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { HomepageComponent } from './Admin/homepage/homepage.component';
import { UserManagementComponent } from './Admin/user-management/user-management.component';
import { ImageManagementComponent } from './Admin/image-management/image-management.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './shared/login.guard';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
 {path:'', redirectTo:'login', pathMatch:'full'}, 

 { path: 'register', component: RegisterComponent},


 { path: 'home', component: HomeComponent },
 
  {path:'login', component:LoginComponent},

  {path:'profile', component:ProfileComponent},

  {path:'admin', component:AdminLayoutComponent, canActivate:[LoginGuard],},

  {path:'admin/employee-management', component:AdminLayoutComponent,
  children:[
    {
      path:'', component:EmployeeManagementComponent
    }
  ]},
   
  {path:'admin/user-management', component:AdminLayoutComponent,
  children:[
    {
      path:'', component:UserManagementComponent
    }
  ]},

  {path:'admin/image-management', component:AdminLayoutComponent,
  children:[
    {
      path:'', component:ImageManagementComponent
    }
  ]},

 {path:'admin/homepage', component:AdminLayoutComponent,
 children:[
  {
    path:'', component:HomepageComponent
  }]}


];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
