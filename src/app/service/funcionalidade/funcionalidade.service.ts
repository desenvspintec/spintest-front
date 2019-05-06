import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {

  url = 'rs/v1/query/funcionalidade';

  constructor(private http: HttpClient) { }

  public findByProdutoId(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '?produtoId=' + id);
  }

  public save(body, success) {
    const observe = 'response';
    this.http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
