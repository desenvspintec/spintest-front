import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaEntradaService {

  url = 'rs/v1/contaentrada';
  constructor(private http: HttpClient) { }

  depositar(deposito, success) {
    const observe = 'response';
    this.http.post(this.url,
      deposito,
      { observe })
      .subscribe(() => {
        success();
      })
  }

}
