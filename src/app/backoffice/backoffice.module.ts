import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBanqueComponent } from './list-banque/list-banque.component';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { LogoutComponent } from './logout/logout.component';
import { ListActualiteComponent } from './list-actualite/list-actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { ListPrestationComponent } from './list-prestation/list-prestation.component';
import { AddPrestationComponent } from './add-prestation/add-prestation.component';
import { UpdatePrestationComponent } from './update-prestation/update-prestation.component';
import { UpdatebanqueComponent } from './updatebanque/updatebanque.component';


import { ListAproposComponent } from './list-apropos/list-apropos.component';
import { AddAproposComponent } from './add-apropos/add-apropos.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ListBanqueComponent,
    AddBanqueComponent,
    AddCompteComponent,
    ListCompteComponent,
    ListAgentComponent,
    AddAgentComponent,
    LogoutComponent,
    ListActualiteComponent,
    AddActualiteComponent,
    ListPrestationComponent,
    AddPrestationComponent,
    UpdatePrestationComponent,
    UpdatebanqueComponent,
   
    ListAproposComponent,
    AddAproposComponent,
    
    
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule
  ],
  providers: [

   // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
})
export class BackofficeModule { }
