import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetoTesteService {

  url = 'rs/v1/projetoteste';

  constructor(private _http: HttpClient) { }

  findAll(success) {
    const observe = 'response';
    return this._http.get(this.url, { observe })
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
