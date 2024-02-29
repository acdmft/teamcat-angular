import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private Http: HttpClient) { }

  addPrestation(prestation: any) {
    return this.Http.post(environment.baseUrl+"prestations/save", prestation);
  }

  getAllPrestations() {
    return this.Http.get(environment.baseUrl+"prestations/list");
  }
}
