import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {


  constructor(private storageService: StorageService,private authService: AuthService) { }

  ngOnInit(): void {
  }

  

  logout() {
    return this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
        window.location.reload();
      }
    });
    }

  
}
