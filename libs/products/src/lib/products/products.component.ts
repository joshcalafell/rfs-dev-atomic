import { OnInit } from '@angular/core'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from './products.service'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CommonModule } from '@angular/common'
import { Component, OnDestroy } from '@angular/core'
import { ICandleProduct } from '../model/IProduct.model'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'

import { Observable } from 'rxjs'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-products',
	standalone: true,
	imports: [CommonModule, UiProductCardComponent, RouterModule],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
	service: ProductsService
	products: ICandleProduct[] = []

	constructor(service: ProductsService) {
		this.service = service
		console.log('ProductsComponent')
	}

	ngOnInit(): void {
		this.getProducts().subscribe((products) => {
			this.products = products
		})
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
