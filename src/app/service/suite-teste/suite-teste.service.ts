import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuiteTesteService {

  url = 'rs/v1/query/suiteteste';

  constructor(private _http: HttpClient) { }

  findByProjetoTesteId(id: number): Observable<any[]> {
    return this._http.get<any[]>(this.url + '?projetoTesteId=' + id);
  }

  save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
