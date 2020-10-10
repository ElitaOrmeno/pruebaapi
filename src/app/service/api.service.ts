import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://5d8cdb5a443e3400143b4bea.mockapi.io/mito/products';

  constructor(private _http: HttpClient) { }

  public getProducts() {
    return this._http.get(this.url);
  }

  public getProductById(id) {
    return this._http.get(`${this.url}/${id}`);
  }
}
