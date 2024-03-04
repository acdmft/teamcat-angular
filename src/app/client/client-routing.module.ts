import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ClientAuthGuardServiceService } from '../services/client-auth-guard-service.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardClientComponent,
    canActivate: [ClientAuthGuardServiceService],
    children: [
      /* {
        path: 'client',
        component: DashboardClientComponent,
      
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
