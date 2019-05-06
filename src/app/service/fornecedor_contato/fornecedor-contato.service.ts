import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorContatoService {

  url = 'rs/v1/query/fornecedorcontato';

  constructor(private _http: HttpClient) { }

  public findByFornecedorId(id: number): Observable<any[]> {
    return this._http.get<any[]>(this.url + '?fornecedorId=' + id);
  }

  public save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }

}
