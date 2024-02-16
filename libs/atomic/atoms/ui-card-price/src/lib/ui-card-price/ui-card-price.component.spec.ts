import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiCardPriceComponent } from './ui-card-price.component'

describe('UiCardPriceComponent', () => {
	let component: UiCardPriceComponent
	let fixture: ComponentFixture<UiCardPriceComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiCardPriceComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiCardPriceComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
