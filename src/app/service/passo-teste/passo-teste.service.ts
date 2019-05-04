import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassoTesteService {

  url = 'rs/v1/passoteste';

  constructor(private _http: HttpClient) { }

  findByCasoTesteId(id, success) {
    const observe = 'response';
    return this._http.get(this.url + '/findbycasoteste/' + id, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }

  save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }


}
