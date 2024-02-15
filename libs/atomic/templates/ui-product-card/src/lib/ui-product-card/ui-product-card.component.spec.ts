import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiProductCardComponent } from './ui-product-card.component'
import { ChipComponent } from '@rfs-dev-atomic/ui-atoms'

describe('UiProductCardComponent', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let component: UiProductCardComponent
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let fixture: ComponentFixture<UiProductCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiProductCardComponent, ChipComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiProductCardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
