import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiProductCardComponent } from './ui-product-card.component'

describe('UiProductCardComponent', () => {
	let component: UiProductCardComponent
	let fixture: ComponentFixture<UiProductCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiProductCardComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiProductCardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
