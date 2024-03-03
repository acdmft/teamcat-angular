import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../../services/banque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-banque',
  templateUrl: './update-banque.component.html',
  styleUrl: './update-banque.component.css'
})
export class UpdateBanqueComponent implements OnInit {
  constructor(private service: BanqueService, private router: Router,  private route: ActivatedRoute) {}
  banqueId: any;
  public nom: any;
  public adresse: any;
  public capital: any;
  public imageFile: any;
  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.banqueId = params['id']
    })
    this.service.getByIdBanque(this.banqueId).subscribe(
      (response: any) => {
        this.nom = response["nom"];
        this.adresse = response["adresse"];
        this.capital = response["capital"];
        this.imageFile = response["imageFile"];
      }
    )

  }

  updateBanque(banque: any) {
    this.service.updateBanque(this.banqueId, banque).subscribe(
      (response) => this.router.navigate(["/dashboard/listBanque"])
    )
  }

}
