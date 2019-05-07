import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseLinePlanejadoService {

  url = 'rs/v1/query/baselineplanejado';

  constructor(private _http: HttpClient) { }

  public findAll(): Observable<any[]> {
    return this._http.get<any[]>(this.url);
  }

  /**
   * 
   * @param planoTestId 
   */
  public findByPlanoTesteId(planoTestId: number): Observable<any[]> {
    return this._http.get<any[]>(this.url, {
      params: new HttpParams()
        .set('planoTesteId', `${planoTestId}`)
    });
  }

  public save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }
}
