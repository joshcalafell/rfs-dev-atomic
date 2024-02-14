import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiOrdersComponent } from './ui-orders.component'

describe('UiOrdersComponent', () => {
	let component: UiOrdersComponent
	let fixture: ComponentFixture<UiOrdersComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiOrdersComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiOrdersComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
