import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {

  url = 'rs/v1/query/funcionalidade';

  constructor(private http: HttpClient) { }

  findByProdutoId(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '?produtoId=' + id, { observe })
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
