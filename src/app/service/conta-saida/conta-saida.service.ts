import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaSaidaService {

  url = 'rs/v1/contasaida';
  constructor(private http: HttpClient) { }

  sacar(saque, success) {
    const observe = 'response';
    this.http.post(this.url,
      saque,
      { observe })
      .subscribe(() => {
        success();
      })
  }
}
