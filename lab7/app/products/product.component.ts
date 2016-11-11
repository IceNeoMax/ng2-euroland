
import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'product-wrapper',
    moduleId:module.id,
    templateUrl: 'product.component.html'
})


export class ProductComponent { 
    listFilter: string = '';
    rateList: string='';
   products: Product[] ;
   errorMess: string;
   constructor(private _productService:ProductService){}
    ngOnInit(){
        this.flagShow = true;
        this._productService.getProduct()
        .subscribe(products=> this.products=products,
                   error=> this.errorMess=<any>error)
    }
    //public prop
    flagShow: boolean = false; //default

    showInfo(){
        this.flagShow = !this.flagShow;
    }

    onRatingClicked(mess: string): void{
        this.rateList += mess;
    }

}