import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../../services/banque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebanque',
  templateUrl: './updatebanque.component.html',
  styleUrl: './updatebanque.component.css'
})
export class UpdatebanqueComponent implements OnInit{
  constructor(private service: BanqueService, private router: Router,  private route: ActivatedRoute) {}
  banqueId: any;
  public nom: any;
  public adresse: any;
  public capital: any;
  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.banqueId = params['id']
    })
    this.service.getByIdBanque(this.banqueId).subscribe(
      (response: any) => {
        this.nom = response["nom"];
        this.adresse = response["adresse"];
        this.capital = response["capital"];
      }
    )

  }

  updateBanque(banque: any) {
    this.service.updateBanque(banque).subscribe(
      (response) => this.router.navigate(["/dashboard/listBanque"])
    )
  }
}