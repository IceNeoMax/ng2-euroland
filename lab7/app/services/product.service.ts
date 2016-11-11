import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from '../model/product';


@Injectable()
export class ProductService{
    private _productUrl = 'api/products/product.json';
    constructor(private _http:Http){}

    getProduct(): Observable<Product[]>{
        return this._http.get(this._productUrl)
        .map((response:Response)=><Product[]>response.json())
        .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error||'Server err');
    }
}