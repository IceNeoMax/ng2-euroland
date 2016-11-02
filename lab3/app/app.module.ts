import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home.component';
import { ProductComponent } from './products/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
            BrowserModule,
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
                  CategoryComponent
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
