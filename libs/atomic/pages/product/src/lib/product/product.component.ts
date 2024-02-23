/* eslint-disable @nx/enforce-module-boundaries */
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { ProductsService } from 'apps/candle-store/src/app/service/products/products.service'
import { ICandleProduct } from 'apps/candle-store/src/app/service/model/IProduct.model'
import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-product',
	standalone: true,
	imports: [CommonModule, UiProductCardComponent, RouterModule],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit, OnDestroy {
	service = inject(ProductsService)
	products$: Observable<ICandleProduct[]> = this.getProducts()

	constructor() {
		console.log('ProductsComponent created')
	}

	ngOnInit(): void {
		console.log('ProductsComponent initialized')
	}

	ngOnDestroy(): void {
		console.log('ProductsComponent destroyed')
	}

	getProducts(): Observable<ICandleProduct[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		console.log('product', product)
		this.service.mockProductService.addToCart(product)
	}
}
