// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Observable } from 'rxjs'
import { ICandleProduct } from '../model/IProduct.model'
import { ProductsService } from './products.service'

@Component({
	selector: 'rfs-dev-atomic-products',
	standalone: true,
	imports: [CommonModule, RouterModule, UiProductCardComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
	service: ProductsService
	products: ICandleProduct[] = []

	constructor(service: ProductsService) {
		this.service = service
	}

	ngOnInit(): void {
		this.getProducts().subscribe((products) => {
			this.products = products
		})
	}

	getProducts(): Observable<ICandleProduct[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		this.service.mockProductService.addToCart(product)
	}
}
