import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  url = 'rs/v1/fornecedor';
  constructor(private http: HttpClient) { }

  findByEmpresaId(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '/findbyempresa/'+id, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }

}
