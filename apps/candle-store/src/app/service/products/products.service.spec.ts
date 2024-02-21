import { TestBed } from '@angular/core/testing'
import { ProductsService } from './products.service'

describe('ProductsService', () => {
	let service: ProductsService

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProductsService],
		})
		service = TestBed.inject(ProductsService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should have a mockProductService', () => {
		expect(service.mockProductService).toBeDefined()
	})

	it('should have a mockSingleProductService', () => {
		expect(service.mockSingleProductService).toBeDefined()
	})

	it('should have a getProducts method', () => {
		expect(service.mockProductService.getProducts).toBeDefined()
	})

	it('should have a getProducts method that returns an observable', () => {
		service.mockProductService.getProducts().subscribe((products) => {
			expect(products).toBeInstanceOf(Array)
		})
	})

	it('should have a getProduct method that returns an observable', () => {
		expect(service.mockSingleProductService.getProductById(1)).toBeInstanceOf(
			Object
		)
	})

	it('should have a getProduct method that returns an observable of ICandleProduct', () => {
		service.mockSingleProductService.getProductById(1).subscribe((product) => {
			expect(product).toHaveProperty('name')
			expect(product).toHaveProperty('price')
			expect(product).toHaveProperty('description')
			expect(product).toHaveProperty('image')
		})
	})
})
