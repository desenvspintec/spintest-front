import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  url = 'rs/v1/query/fornecedor';
  constructor(private http: HttpClient) { }

  findByEmpresaId(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '?empresaId=' + id, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }

  save(body, success) {
    const observe = 'response';
    this.http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }

}
