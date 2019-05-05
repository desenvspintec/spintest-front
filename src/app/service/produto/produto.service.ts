import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  url = 'rs/v1/query/produto';

  constructor(private http: HttpClient) { }

  findByFornecedor(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '?fornecedorId=' +id, { observe })
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
