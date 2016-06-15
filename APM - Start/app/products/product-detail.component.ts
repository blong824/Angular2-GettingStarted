import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {IProduct} from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';
@Component({
  templateUrl : 'app/products/product-detail.component.html',
  directives: [StarComponent]
})
export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _routeParams: RouteParams,
              private _router: Router,
              private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getProduct(+this._routeParams.get('id'))
        .subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error
        );
  }

  onBack(): void {
    this._router.navigate(['Products']);
  }
}
