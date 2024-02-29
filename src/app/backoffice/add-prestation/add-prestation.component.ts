import { Component } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrl: './add-prestation.component.css'
})
export class AddPrestationComponent {

  constructor(private service: PrestationService, private router: Router) { }

  addPrestation(myForm: any) {
    this.service.addPrestation(myForm).subscribe(
      data => {
        this.router.navigate(["/dashboard/listPrestation"])
        console.log(data);
    });
  }

}
