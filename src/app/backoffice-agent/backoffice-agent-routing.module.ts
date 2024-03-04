import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AgentAuthGuardService } from '../services/agent-auth-guard.service' 

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AgentAuthGuardService],
    children: [
      {
        path: 'listClient',
        component: ListClientComponent,
      //   canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeAgentRoutingModule { }
