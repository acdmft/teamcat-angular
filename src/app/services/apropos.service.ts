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

  deleteApropos(apropos: any) {
    return this.Http.delete(environment.baseUrl + "apropos/" + apropos.id)
  }

  getByIdApropos(id: number) {
    return this.Http.get(environment.baseUrl + "apropos/" + id);
  }


  updateApropos(apropos: any) {
    return this.Http.put(environment.baseUrl+"apropos/" +apropos.id, apropos);
  }
}
