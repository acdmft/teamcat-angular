import { Component, OnInit } from '@angular/core';
import { AproposService } from '../../services/apropos.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent implements OnInit{
  public urlUpload = environment.urlUploadImage;
  constructor(private service: AproposService) { }
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
}
