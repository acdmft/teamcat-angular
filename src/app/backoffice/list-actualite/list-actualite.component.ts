import { Component } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrl: './list-actualite.component.css'
})
export class ListActualiteComponent {
  public urlUpload = environment.urlUploadImage;
  constructor(private service: ActualiteService, private router: Router) { }
  actualites:any;
  ngOnInit() {
    this.refreshListActualites();
  }
  refreshListActualites() {
    this.service.getAllActualites().subscribe(
      (response:any) => {
        this.actualites = response;
        console.log(this.actualites);
      }
    );
  }

  addActualite(){
    this.router.navigate(['/dashboard/addActualite']);
  }

  deleteActualite(actualite: any) {
    this.service.deleteActualite(actualite).subscribe(response => {
      //console.log(response);
      this.refreshListActualites();
    })
  }

  updateActualite(actualite:any){}
}
