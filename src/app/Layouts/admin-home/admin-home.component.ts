import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
  //     error: err => {console.log(err)
  //       if (err.error) {
  //         this.content = JSON.parse(err.error).message;
  //       } else {
  //         this.content = "Error with status: " + err.status;
  //       }
  //     }
  //  });
  }

}
