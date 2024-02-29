import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../../services/banque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-banque',
  templateUrl: './list-banque.component.html',
  styleUrl: './list-banque.component.css'
})
export class ListBanqueComponent  implements OnInit{
  constructor(private banqueService: BanqueService, private router: Router) {
  }
  banques:any;
  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.banqueService.getAllBanques().subscribe(
      (response:any) => {
        this.banques = response;
        console.log(this.banques);
      }
    );
  }

  addBanque(){
    this.router.navigate(['/dashboard/addBanque']);
  }

  deleteBanque(banque: any) {
   

    this.banqueService.deleteBanque(banque).subscribe(

      response => {
        alert("Suppresion avec succès");
        this.refreshData();
      },

      error => console.log(error + "Problème dans l'api")
    );
  }

  updateBanque(banque:any){
    //console.log("updateBanque")

   this.router.navigate(['dashboard/updateBanque',banque.id]);
  }
}



