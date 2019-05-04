import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasoTesteService {

  url = 'rs/v1/casoteste';

  constructor(private _http: HttpClient) { }

  findBySuiteTesteId(id, success) {
    const observe = 'response';
    return this._http.get(this.url + '/findbysuiteteste/' + id, { observe })
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
