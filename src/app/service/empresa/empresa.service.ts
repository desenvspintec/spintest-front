import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = 'rs/v1/empresa';

  constructor(private http: HttpClient) { }

  findAll(success) {
    const observe = 'response';
    return this.http.get(this.url, { observe })
    .subscribe(response => {
      success(response.body);
    });
  }
}
