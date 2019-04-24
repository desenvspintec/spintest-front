import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  url = 'rs/v1/agencia';
  constructor(private http: HttpClient) { }

  findAll(success) {
    const observe = 'response';
    this.http.get(this.url, { observe })
      .subscribe(contas => {
        success(contas.body);
      });
  }

}
