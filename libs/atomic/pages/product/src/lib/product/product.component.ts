/* eslint-disable @nx/enforce-module-boundaries */
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { ProductsService } from 'apps/candle-store/src/app/service/products/products.service'
import { ICandleProduct } from 'apps/candle-store/src/app/service/model/IProduct.model'
import { Component, inject } from '@angular/core'
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
export class ProductComponent {
	service = inject(ProductsService)
	products$: Observable<ICandleProduct[]> = this.getProducts()

	getProducts(): Observable<ICandleProduct[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		this.service.mockProductService.addToCart(product)
	}
}
