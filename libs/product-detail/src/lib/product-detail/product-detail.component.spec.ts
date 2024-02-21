import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductDetailComponent } from './product-detail.component'

import { UiStarComponent } from '@rfs-dev-atomic/ui-star'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'

describe('ProductDetailComponent', () => {
	let component: ProductDetailComponent
	let fixture: ComponentFixture<ProductDetailComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductDetailComponent, UiButtonRowComponent, UiStarComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
