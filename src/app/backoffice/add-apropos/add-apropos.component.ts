import { Component } from '@angular/core';
import { AproposService } from '../../services/apropos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apropos',
  templateUrl: './add-apropos.component.html',
  styleUrl: './add-apropos.component.css'
})
export class AddAproposComponent {
  constructor(private service: AproposService, private router: Router) { }


  persistApropos(apropos:any){
    this.service.createApropos(apropos).subscribe(
      data => {
        this.router.navigate(["/dashboard/listApropos"])
        console.log(data);
      });
  }
}
