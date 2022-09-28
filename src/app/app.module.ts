import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './Admin/employee-management/employee-management.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule, Ng2OrderPipe} from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination'
import { LoginComponent } from './login/login.component';
import { AdminHeaderComponent } from './Layouts/admin-header/admin-header.component';
import { AdminHomeComponent } from './Layouts/admin-home/admin-home.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { HomepageComponent } from './Admin/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserManagementComponent } from './Admin/user-management/user-management.component';
import { ImageManagementComponent } from './Admin/image-management/image-management.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { TokenService } from './Service/token.service';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserManagementComponent,
    EmployeeManagementComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminLayoutComponent,
    HomepageComponent,
    UserManagementComponent,
    ImageManagementComponent,
    SearchFilterPipe,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
     Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    DataTablesModule


  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenService, multi:true}, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
