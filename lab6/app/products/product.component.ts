
import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'product-wrapper',
    moduleId:module.id,
    templateUrl: 'product.component.html'
})


export class ProductComponent { 
    listFilter: string = '';
    rateList: string='';
   products: Product[] = [
        {
            "name":"Gau Bong Meo",
            "image": "assets/img/1.png",
            "price": 4500,
            "code": "ASDFV",
            "type":"big",
            "rate":4.2
        },
        {
            "name":"Cho Khong Lo",
            "image": "assets/img/2.png",
            "price": 5000,
            "code": "ASDFV",
            "type":"small",
            "rate":3.8
        }, 
        {
            "name":"Gau Meo Bong",
            "image": "assets/img/3.png",
            "price": 1000,
            "code": "ASDFV",
            "type":"medium",
            "rate":2
        }, 
        {
            "name":"Con Ga Bong",
            "image": "assets/img/4.png",
            "price": 3000,
            "code": "ASDFV",
            "type":"small",
            "rate":5
        }, 
        {
            "name":"Con Lon ",
            "image": "assets/img/5.png",
            "price": 2500,
            "code": "ASDFV",
            "type":"medium",
            "rate":3.2
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

    onRatingClicked(mess: string): void{
        this.rateList += mess;
    }

}