import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private service: UserService) {}
  
  userName: any;
  ngOnInit(): void {
    this.userName = this.service.getUserName();
  }

}
