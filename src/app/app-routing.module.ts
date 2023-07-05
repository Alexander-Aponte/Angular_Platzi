import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { adminGuard } from './admin.guard';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: 
    [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
  
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'products',
        canActivate:[adminGuard],
        loadChildren: () => import('./product/product.module').then(m=>m.ProductModule)
      },
      
      {
        path:'demo',
        canActivate:[adminGuard],
        loadChildren: () => import('./demo/demo.module').then(m=>m.DemoModule)
      },
      {
        path:'contact',
        canActivate:[adminGuard],
        loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule)
      },

    ]
  },

  {
    path:'**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
