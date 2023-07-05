import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent  } from './components/products/products.component';

const Routes: Routes = [{

    path:'',
    component: ProductsComponent

},
{
    path:':id',
    component: ProductDetailComponent
  },
];

@NgModule ({
    imports: [
        RouterModule.forChild(Routes),
    ],

exports: [
    RouterModule
]

})

export class ProductRoutingModule{

}