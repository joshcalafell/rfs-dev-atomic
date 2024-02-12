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
	}

	// Mock the GET request for a single Product
	mockSingleProductService = {
		getProduct() {
			return of(productsMock[0])
		},
	}
}
