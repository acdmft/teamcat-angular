import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-update-prestation',
  templateUrl: './update-prestation.component.html',
  styleUrl: './update-prestation.component.css'
})
export class UpdatePrestationComponent implements OnInit {
  constructor(private service: PrestationService, private router: Router,  private route: ActivatedRoute) {}
  prestationId: any;
  public title: any;
  public description: any;
  public libelle: any;
  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.prestationId = params['id']
    })
    this.service.getByIdPrestation(this.prestationId).subscribe(
      (response: any) => {
        this.title = response["title"];
        this.description = response["description"];
        this.libelle = response["libelle"];
      }
    )

  }

  updatePrestation(prestation: any) {
    this.service.updatePrestation(prestation).subscribe(
      (response) => this.router.navigate(["/dashboard/listPrestation"])
    )
  }
}
