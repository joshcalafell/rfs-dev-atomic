import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiProductsComponent } from './ui-products.component'

describe('UiProductsComponent', () => {
	let component: UiProductsComponent
	let fixture: ComponentFixture<UiProductsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiProductsComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiProductsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
