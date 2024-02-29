import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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



  deleteBanque(banque:any)
  {
     return this.Http.delete(environment.baseUrl+"banques/"+banque.id); 
  }

  getByIdBanque(id: number) {
    return this.Http.get(environment.baseUrl + "banques/" + id);
  }


  updateBanque(banque: any) {
    return this.Http.put(environment.baseUrl+"banques/" +banque.id, banque);
  }
}
