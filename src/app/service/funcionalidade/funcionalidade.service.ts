import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {

  url = 'rs/v1/funcionalidade';

  constructor(private http: HttpClient) { }

  findByProdutoId(id, success) {
    const observe = 'response';
    return this.http.get(this.url + '/findbyproduto/'+id, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
