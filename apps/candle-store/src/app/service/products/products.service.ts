import { ICandleProduct } from '../model/IProduct.model'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import productsMock from './products.mock'

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	// Mock the GET request for a list of Products
	mockProductService = {
		getProducts() {
			return of(productsMock)
		},

		cart: (<never>[]) as ICandleProduct[],

		addToCart(product: ICandleProduct) {
			this.cart.push(product)
		},
	}

	// Mock the GET request for a single Product
	mockSingleProductService = {
		getProductById(id: number) {
			return of(
				productsMock.find((product) => product.entity.id === new String(id))
			) // eslint-disable-line
		},
	}
}
