import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuiteTesteService {

  url = 'rs/v1/suiteteste';

  constructor(private _http: HttpClient) { }

  findByProjetoTesteId(id, success) {
    const observe = 'response';
    return this._http.get(this.url + '/findbyprojetoteste/' + id, { observe })
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
