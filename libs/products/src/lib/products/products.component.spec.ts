import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductsComponent } from './products.component'
import { ProductListComponent } from '../product-list/product-list.component'

describe('ProductsComponent', () => {
	let component: ProductsComponent
	let fixture: ComponentFixture<ProductsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsComponent, ProductListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a list of products', () => {
		expect(component.products).toBeDefined()
	})
})
