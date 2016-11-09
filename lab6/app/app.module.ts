import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './core/home.component';
import { FilterProductPipe } from './helper/product.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
            BrowserModule,
            FormsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
