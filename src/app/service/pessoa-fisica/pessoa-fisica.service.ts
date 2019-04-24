import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {
  url = 'rs/v1/pessoafisica';
  constructor(private http: HttpClient) { }

  findAll(sucess) {
    const observe = 'response';
    this.http.get(this.url, { observe })
      .subscribe(pessoas => {
        sucess(pessoas.body);
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
