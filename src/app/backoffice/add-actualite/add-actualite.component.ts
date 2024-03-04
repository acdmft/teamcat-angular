import { Component } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrl: './add-actualite.component.css'
})
export class AddActualiteComponent {

  constructor(private service: ActualiteService, private router: Router) { }

  selectedFile!: File;

  persistActualite(actualite:any){
    let actualiteTemp = new FormData();
    actualiteTemp.append('logoImage', this.selectedFile, this.selectedFile.name);
    actualiteTemp.append('titre', actualite.titre);
    actualiteTemp.append('description', actualite.description);

    this.service.createActualite(actualiteTemp).subscribe(
      data => {
        this.router.navigate(["/dashboard/listActualite"])
        console.log(data);
    });
  }

  // Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }
}
