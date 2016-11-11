import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './core/home.component';
import { FilterProductPipe } from './helper/product.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
                { path: 'home', component: HomeComponent },
                { path: 'products', component: ProductComponent },
                { path: 'category', component: CategoryComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
              ]),
              ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ProductComponent,
                  CategoryComponent,
                  FilterProductPipe,
                  StarComponent
                ],
  providers:[ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
