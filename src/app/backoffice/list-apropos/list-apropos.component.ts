import { Component } from '@angular/core';
import { AproposService } from '../../services/apropos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-apropos',
  templateUrl: './list-apropos.component.html',
  styleUrl: './list-apropos.component.css'
})
export class ListAproposComponent {
  constructor(private service: AproposService, private router: Router) { }
  apropos:any;
  ngOnInit() {
    this.refreshListComptes();
  }
  refreshListComptes() {
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
}
