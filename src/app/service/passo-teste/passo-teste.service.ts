import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassoTesteService {

  url = 'rs/v1/query/passoteste';

  constructor(private _http: HttpClient) { }

  /**
   * 
   * @param id 
   */
  findByCasoTesteId(id: number): Observable<any[]> {
    return this._http.get<any[]>(this.url + '?casoTesteId=' + id);
  }

  save(body, success) {
    const observe = 'response';
    this._http.post(this.url, body, { observe })
      .subscribe(response => {
        success(response.body);
      });
  }


}
