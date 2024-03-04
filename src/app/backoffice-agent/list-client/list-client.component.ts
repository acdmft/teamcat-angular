import { Component } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css',
})
export class ListClientComponent {
  public clients: any = [
    {
      id: '112',
      username: 'BenoitNerin',
      email: 'benoit@gmail.com',
      nom: 'Nerin',
      prenom: 'Benoit',
      telephone: '1234567',
      adresse: 'Paris',
      matricule: 'abcd1234',
      dateCreation: '12/02/2024',
      photo: 'image.png',
    },
  ];
}
