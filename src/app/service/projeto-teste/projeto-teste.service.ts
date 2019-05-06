import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoTesteService {

  url = 'rs/v1/query/projetoteste';

  constructor(private _http: HttpClient) { }

  public findAll(): Observable<any[]> {
    return this._http.get<any[]>(this.url);
  }

  public save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
