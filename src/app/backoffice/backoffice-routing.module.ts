import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBanqueComponent } from './list-banque/list-banque.component';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListActualiteComponent } from './list-actualite/list-actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { ListPrestationComponent } from './list-prestation/list-prestation.component';
import { AddPrestationComponent } from './add-prestation/add-prestation.component';
import { UpdatePrestationComponent } from './update-prestation/update-prestation.component';
import { UpdatebanqueComponent } from './updatebanque/updatebanque.component';
import { ListAproposComponent } from './list-apropos/list-apropos.component';
import { AddAproposComponent } from './add-apropos/add-apropos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'listBanque',
        component: ListBanqueComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addBanque',
        component: AddBanqueComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'updateBanque/:id',
        component: UpdatebanqueComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'listCompte',
        component: ListCompteComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addCompte',
        component: AddCompteComponent,
        canActivate: [AuthGuardService]
      }
      ,
      {
        path: 'listAgent',
        component: ListAgentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addAgent',
        component: AddAgentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'listActualite',
        component: ListActualiteComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addActualite',
        component: AddActualiteComponent,
        canActivate: [AuthGuardService]
      },
      // PRESTATIONS 
      {
        path: 'listPrestation',
        component: ListPrestationComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addPrestation',
        component: AddPrestationComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'updatePrestation/:id',
        component: UpdatePrestationComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'listApropos',
        component: ListAproposComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addApropos',
        component: AddAproposComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
