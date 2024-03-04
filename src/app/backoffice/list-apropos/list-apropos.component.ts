import { Component } from '@angular/core';
import { AproposService } from '../../services/apropos.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-list-apropos',
  templateUrl: './list-apropos.component.html',
  styleUrl: './list-apropos.component.css'
})
export class ListAproposComponent {
  public urlUpload = environment.urlUploadImage;
  constructor(private service: AproposService, private router: Router) { }
  apropos:any;
  ngOnInit() {
    this.refreshListApropos();
  }
  refreshListApropos() {
    this.service.getAllApropos().subscribe(
      (response:any) => {
        this.apropos = response;
        console.log(this.apropos);
      }
    );
  }

  addApropos(){
    this.router.navigate(['/dashboard/addApropos']);
  }

  deleteApropos(apropos: any) {
    this.service.deleteApropos(apropos.id).subscribe(response => {
      //console.log(response);
      this.refreshListApropos();
    })
  }

  updateApropos(apropos:any){}
}
