import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductsComponent } from './products.component'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { Observable } from 'rxjs'

describe('ProductsComponent', () => {
	let component: ProductsComponent
	let fixture: ComponentFixture<ProductsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsComponent, UiProductCardComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductsComponent)
		component = fixture.componentInstance

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a service', () => {
		expect(component.service).toBeDefined()
	})

	it('should have a getProducts method', () => {
		expect(component.getProducts).toBeDefined()
	})

	it('should have a getProducts method that returns an observable', () => {
		expect(component.getProducts()).toBeInstanceOf(Observable)
	})

	it('should have a getProducts method that returns an observable of ICandleProduct[]', () => {
		component.getProducts().subscribe((products) => {
			expect(products).toBeInstanceOf(Array)
			expect(products[0]).toHaveProperty('name')
			expect(products[0]).toHaveProperty('price')
			expect(products[0]).toHaveProperty('description')
			expect(products[0]).toHaveProperty('image')
		})
	})
})
