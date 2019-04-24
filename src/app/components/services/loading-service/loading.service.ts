import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private ieLoading: boolean = false;

  constructor() { }

  get loading() {
    return this.ieLoading;
  }

  startLoading() {
    this.ieLoading = true;

  }

  stopLoading() {
    this.ieLoading = false;
  }
}
