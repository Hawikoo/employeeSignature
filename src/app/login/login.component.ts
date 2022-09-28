import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    let data = {
      username:username,
      password:password
    }
    
    this.authService.login(data).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
       
        //this.router.routerLink('/admin/employee-management')
      
       this.reloadPage();
       
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      
   }); 
   this.router.navigate(['/admin/employee-management'])
     
  }
  reloadPage(): void {
    window.location.reload();
  }

}
