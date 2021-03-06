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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n                \n                    <!-- Brand and toggle get grouped for better mobile display -->\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a class=\"navbar-brand\" href=\"#\">\n                            Brand\n                        </a>\n                    </div>\n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav\">\n                            \n                                <li><a [routerLink]=\"['/home']\">Home</a></li>\n                                <li><a [routerLink]=\"['/products']\">Products</a></li>\n                                <li><a [routerLink]=\"['/category']\">Category</a></li>\n                            \n                        </ul>\n                    \n                    <!-- /.navbar-collapse -->\n                </div>\n                <!-- /.container -->\n                <div class=\"clearfix\"></div>\n            </nav>\n       <router-outlet></router-outlet>\n        <!-- footer -->\n        \n        <footer>\n            Here comes the footer\n        </footer> \n        <div class=\"clearfix\"></div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map