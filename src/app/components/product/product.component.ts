import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  readonly data$: Observable<ProductModel[]> = this._productService.getAll();
  private _detailsSubject: Subject<ProductModel> = new Subject<ProductModel>();
  public details$: Observable<ProductModel> = this._detailsSubject.asObservable();
  private _selectedProductCategorySubject: Subject<string> = new Subject<string>();
  public selectedProductCategory$: Observable<string> = this._selectedProductCategorySubject.asObservable();
  readonly categoryDetails$: Observable<ProductModel> = this.selectedProductCategory$.pipe(
    switchMap(data => this._productService.getOne(data)));

  constructor(private _productService: ProductService) {
  }

  selecte(element: ProductModel): void {
    this._detailsSubject.next(element);
  }
}
