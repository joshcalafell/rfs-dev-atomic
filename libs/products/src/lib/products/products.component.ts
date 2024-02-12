// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from './products.service'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from '../product-list/product-list.component'
import { ICandleProduct } from '../model/IProduct.model'

@Component({
	selector: 'rfs-dev-atomic-products',
	standalone: true,
	imports: [CommonModule, ProductsComponent, ProductListComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
	productsService: ProductsService
	products: ICandleProduct[] = []

	constructor() {
		this.productsService = inject(ProductsService)
	}

	ngOnInit() {
		try {
			this.productsService.mockProductService
				.getProducts()
				.subscribe((products) => {
					this.products = products as ICandleProduct[]
				})
		} catch (error) {
			console.error(error)
			this.products = []
		} finally {
			console.log('Products loaded')
		}
	}
}
