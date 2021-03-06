import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './books/components/page-not-found.component';
import {MainLayoutComponent} from './books/components/main-page/main-layout/main-layout.component';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {LoginComponent} from './shared/components/login.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'product', pathMatch: 'full'},
      //    {path: '', component: MainPageComponent},
      {path: 'product', loadChildren: () => import('./books/books-routing.module').then(m => m.BooksRoutingModule)},
      {path: 'cart', loadChildren: () => import('./cart/cart-routing.module').then(m => m.CartRoutingModule)},
      {path: 'order', loadChildren: () => import('./orders/orders-routing.module').then(m => m.OrdersRoutingModule)},
      {path: 'login', component: LoginComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
