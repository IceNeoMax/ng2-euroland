import { PipeTransform, Pipe } from '@angular/core';

import { Product } from '../model/product';

@Pipe({
    name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

    transform(products: Product[], searchString: string): Product[] {

        //check null/falsy
        searchString = searchString ? searchString.toLocaleLowerCase() : null;

        //vet can
        if(searchString){
            let Arr = products.filter(
                (temp: Product) => {
                    let name = temp.name.toLowerCase();
    
                    return name.indexOf(searchString) > -1;
                }
            );
            
            return Arr;
        }

        return products;
    }
}