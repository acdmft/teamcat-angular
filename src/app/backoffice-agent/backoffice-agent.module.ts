import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeAgentRoutingModule } from './backoffice-agent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListClientComponent } from './list-client/list-client.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListClientComponent
  ],
  imports: [
    CommonModule,
    BackofficeAgentRoutingModule
  ]
})
export class BackofficeAgentModule { }
