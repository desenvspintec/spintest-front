import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  url = 'rs/v1/conta';
  constructor(private http: HttpClient) { }

  findAll(success) {
    const observe = 'response';
    this.http.get(this.url, { observe })
      .subscribe(contas => {
        success(contas.body);
      });
  }

  createPessoaFisica(idAgencia, idPessoa, success) {
    const observe = 'response';
    this.http.post(this.url + "/pessoafisica",
      { idAgencia, idPessoa },
      { observe })
      .subscribe(() => {
        success();
      })
  }
  createPessoaJuridica(idAgencia, idPessoa, success) {
    const observe = 'response';
    this.http.post(this.url + "/pessoajuridica",
      { idAgencia, idPessoa },
      { observe })
      .subscribe(() => {
        success();
      })
  }
}
