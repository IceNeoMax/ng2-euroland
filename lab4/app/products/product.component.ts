
import { Component } from '@angular/core';


@Component({
    selector: 'product-wrapper',
    templateUrl: 'app/products/product.component.html'
})


export class ProductComponent { 
   products: [any] = [
        {
            "name":"Gau Bong",
            "image": "assets/img/1.png",
            "price": 4500,
            "code": "ASDFV"
        },
         {
            "name":"Gau Bong",
            "image": "assets/img/2.png",
            "price": 5000,
            "code": "ASDFV"
        }, 
        {
            "name":"Gau Bong",
            "image": "assets/img/3.png",
            "price": 1000,
            "code": "ASDFV"
        }, 
        {
            "name":"Gau Bong",
            "image": "assets/img/4.png",
            "price": 3000,
            "code": "ASDFV"
        }, 
        {
            "name":"Gau Bong",
            "image": "assets/img/5.png",
            "price": 2500,
            "code": "ASDFV"
        },
    ];

    //public prop
    flagShow: boolean = false; //default

    showInfo(){
        this.flagShow = !this.flagShow;
    }

}