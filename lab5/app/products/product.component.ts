
import { Component } from '@angular/core';
import { Product } from '../model/product';
//import { FilterProductPipe } from '../helper/product.pipe';

@Component({
    selector: 'product-wrapper',
    moduleId:module.id,
    templateUrl: 'product.component.html'
})


export class ProductComponent { 
    listFilter: string = '';
   products: Product[] = [
        {
            "name":"Gau Bong Meo",
            "image": "assets/img/1.png",
            "price": 4500,
            "code": "ASDFV",
            "type":"big"
        },
         {
            "name":"Cho Khong Lo",
            "image": "assets/img/2.png",
            "price": 5000,
            "code": "ASDFV",
            "type":"small"
        }, 
        {
            "name":"Gau Meo Bong",
            "image": "assets/img/3.png",
            "price": 1000,
            "code": "ASDFV",
            "type":"medium"
        }, 
        {
            "name":"Con Ga Bong",
            "image": "assets/img/4.png",
            "price": 3000,
            "code": "ASDFV",
            "type":"small"
        }, 
        {
            "name":"Con Lon ",
            "image": "assets/img/5.png",
            "price": 2500,
            "code": "ASDFV",
            "type":"medium"
        },
    ];
    ngOnInit(){
        this.flagShow = true;
    }
    //public prop
    flagShow: boolean = false; //default

    showInfo(){
        this.flagShow = !this.flagShow;
    }

}