import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatTableModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductComponentModule {
}
