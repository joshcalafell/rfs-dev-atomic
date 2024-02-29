import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { Observable } from 'rxjs'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from 'libs/products/src/lib/service/products.service'
import { RouterModule } from '@angular/router'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICandleProduct } from 'libs/products/src/lib/model/IProduct.model'

@Component({
	selector: 'rfs-dev-atomic-wishlist',
	standalone: true,
	imports: [CommonModule, UiProductCardComponent, RouterModule],
	templateUrl: './wishlist.component.html',
	styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
	service: ProductsService
	products: ICandleProduct[] = []

	constructor(service: ProductsService) {
		this.service = service
	}

	ngOnInit(): void {
		this.getProducts().subscribe((products) => {
			this.products = products.filter((product) => product.isWishListed)
		})
	}

	getProducts(): Observable<ICandleProduct[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		this.service.mockProductService.addToCart(product)
	}
}
