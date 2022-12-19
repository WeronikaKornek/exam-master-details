import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductComponent }]), ProductComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
