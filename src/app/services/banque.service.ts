import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private Http: HttpClient) { }

  createBanque(banque: any) {
    return this.Http.post(environment.baseUrl+"banques", banque);
  }

  getAllBanques() {
    return this.Http.get(environment.baseUrl+"banques");
  }
}
