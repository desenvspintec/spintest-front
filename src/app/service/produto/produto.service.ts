import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'rs/v1/query/produto';

  constructor(private _http: HttpClient) { }

  public findById(id: number): Observable<Object> {
    return this._http.get(this.url + '?id=' + id);
  }

  public findByEmpresa(id: number): Observable<any[]> {
    return this._http.get<any[]>(this.url + '?empresaId=' + id);
  }

  public findAll(): Observable<any[]> {
    return this._http.get<any[]>(this.url);
  }

  public findByFornecedor(id: number): Observable<any[]> {
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
