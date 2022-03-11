import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map' ;
import { Http, Response} from '@angular/http'
import {Album} from './album'
import { Observable } from 'rxjs/Observable';
import {Product} from './product'

@Injectable()
export class ProductService {

  _productsUrl="../assets/products.json"
  constructor(private _http: Http) { }

  private _albumUrl = '../assets/album.json'

  getAlbum(id : number) : Observable<Album>
{
 return this._http.get(this._albumUrl).map(response => response.json());
}

getProducts() : Observable<Product[]>
{
  return this._http.get (this._productsUrl).map((response) => <Product[]> response.json())


  
}

}


