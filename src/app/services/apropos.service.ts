import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AproposService {

  constructor(private Http: HttpClient) { }

  createApropos(apropos: any) {
    return this.Http.post(environment.baseUrl+"apropos", apropos);
  }

  getAllApropos() {
    return this.Http.get(environment.baseUrl+"apropos");
  }
}
