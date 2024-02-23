import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiStarGroupComponent } from '@rfs-dev-atomic/ui-star-group'
import { ProductDetailComponent } from './product-detail.component'

describe('ProductDetailComponent', () => {
	let component: ProductDetailComponent
	let fixture: ComponentFixture<ProductDetailComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ProductDetailComponent,
				UiButtonRowComponent,
				UiStarGroupComponent,
				UiHashGroupComponent,
				UiChipComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
