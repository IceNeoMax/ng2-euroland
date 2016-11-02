import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<nav class="navbar navbar-inverse" role="navigation">
                
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            Brand
                        </a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            
                                <li><a [routerLink]="['/home']">Home</a></li>
                                <li><a [routerLink]="['/products']">Products</a></li>
                                <li><a [routerLink]="['/category']">Category</a></li>
                            
                        </ul>
                    
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container -->
                <div class="clearfix"></div>
            </nav>
       <router-outlet></router-outlet>
        <!-- footer -->
        
        <footer>
            Here comes the footer
        </footer> 
        <div class="clearfix"></div>
        `
})
export class AppComponent { }
