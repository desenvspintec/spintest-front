import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  private url = 'rs/v1/pessoajuridica';

  constructor(private http: HttpClient) { }

  findAll(success) {
    const observe = 'response';
    this.http.get(this.url, { observe })
      .subscribe(pessoas => {
        success(pessoas.body);
      });
  }

  save(pessoa, success) {
    const observe = 'response';
    this.http.post(this.url, pessoa, { observe })
      .subscribe(() => {
        success();
      });
  }

}
