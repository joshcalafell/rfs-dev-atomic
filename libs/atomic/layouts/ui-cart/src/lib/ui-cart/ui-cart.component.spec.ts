import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiCartComponent } from './ui-cart.component'

describe('UiCartComponent', () => {
	let component: UiCartComponent
	let fixture: ComponentFixture<UiCartComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiCartComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiCartComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
