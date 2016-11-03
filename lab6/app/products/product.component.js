"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { FilterProductPipe } from '../helper/product.pipe';
var ProductComponent = (function () {
    function ProductComponent() {
        this.listFilter = '';
        this.products = [
            {
                "name": "Gau Bong Meo",
                "image": "assets/img/1.png",
                "price": 4500,
                "code": "ASDFV",
                "type": "big"
            },
            {
                "name": "Cho Khong Lo",
                "image": "assets/img/2.png",
                "price": 5000,
                "code": "ASDFV",
                "type": "small"
            },
            {
                "name": "Gau Meo Bong",
                "image": "assets/img/3.png",
                "price": 1000,
                "code": "ASDFV",
                "type": "medium"
            },
            {
                "name": "Con Ga Bong",
                "image": "assets/img/4.png",
                "price": 3000,
                "code": "ASDFV",
                "type": "small"
            },
            {
                "name": "Con Lon ",
                "image": "assets/img/5.png",
                "price": 2500,
                "code": "ASDFV",
                "type": "medium"
            },
        ];
        //public prop
        this.flagShow = false; //default
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.flagShow = true;
    };
    ProductComponent.prototype.showInfo = function () {
        this.flagShow = !this.flagShow;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product-wrapper',
            moduleId: module.id,
            templateUrl: 'product.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map