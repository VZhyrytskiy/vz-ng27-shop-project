import {Component, Input, OnInit} from '@angular/core';
import {IProductModel} from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProductModel;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log('product was purchased');
  }

}
