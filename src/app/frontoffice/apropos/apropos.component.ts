import { Component } from '@angular/core';
import { AproposService } from '../../services/apropos.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {
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
