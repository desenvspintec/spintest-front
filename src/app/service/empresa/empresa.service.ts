import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = 'rs/v1/query/empresa';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  public save(body, success) {
    const observe = 'response';
    this.http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
