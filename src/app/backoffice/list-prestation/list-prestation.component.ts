import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrl: './list-prestation.component.css'
})
export class ListPrestationComponent implements OnInit {
  constructor(private service: PrestationService, private router: Router) {}

  prestations: any;
  ngOnInit() {
    this.refreshListPrestations();
  }

  refreshListPrestations() {
    this.service.getAllPrestations().subscribe(
      (response:any) => {
        this.prestations = response;
        console.log(this.prestations);
      }
    )
  }

  deletePrestation(id: number) {
    this.service.removePrestation(id).subscribe(
      (response: any) => this.refreshListPrestations()
    );
  }
    
  updatePrestation(id: number) {
    this.router.navigate(["/dashboard/updatePrestation", id])
  }

}
