import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = 'rs/v1/produto';
  constructor(private http: HttpClient) { }

  findByFornecedor(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '/findbyfornecedor/'+id, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
