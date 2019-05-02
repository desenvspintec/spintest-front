import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private object : any = {};
  constructor() { }

  getData (id){
    return this.object[id];
  }

  setData (id,data){
    this.object[id] = data;
  }

}
