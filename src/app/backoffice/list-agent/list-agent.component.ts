import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrl: './list-agent.component.css'
})
export class ListAgentComponent implements OnInit {
  constructor(private service: UserService, private router: Router) {}
  agents: any;
  ngOnInit() {
    this.refreshListAgent();
  }

  refreshListAgent() {
    this.service.getAllAgents().subscribe(
      (response:any) => {
        this.agents = response;
        console.log(this.agents);
      }
    )
  }

  addAgent() {
    this.router.navigate(["/dashboard/addAgent"])
  }
}
