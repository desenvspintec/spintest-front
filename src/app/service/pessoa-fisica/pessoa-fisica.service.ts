import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {

  url = 'rs/v1/query/pessoafisica';

  constructor(private _http: HttpClient) { }

  public findAll(): Observable<any[]> {
    return this._http.get<any[]>(this.url);
  }
}
