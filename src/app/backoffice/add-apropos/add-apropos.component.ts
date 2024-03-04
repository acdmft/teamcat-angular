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

  selectedFile!: File;

  persistApropos(apropos:any){
    let aproposTemp = new FormData();
    aproposTemp.append('logoImage', this.selectedFile, this.selectedFile.name);
    aproposTemp.append('telephone', apropos.telephone);
    aproposTemp.append('email', apropos.email);
    aproposTemp.append('adresse', apropos.adresse);
    aproposTemp.append('description', apropos.description);

    this.service.createApropos(aproposTemp).subscribe(
      data => {
        // console.log('coucou', aproposTemp);
        console.log(data);
        this.router.navigate(["/dashboard/listApropos"])
      });
  }

  // Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }
}
