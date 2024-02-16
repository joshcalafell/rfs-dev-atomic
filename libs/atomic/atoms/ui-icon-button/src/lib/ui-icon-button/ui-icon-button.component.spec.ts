import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiIconButtonComponent } from './ui-icon-button.component'

describe('UiIconButtonComponent', () => {
	let component: UiIconButtonComponent
	let fixture: ComponentFixture<UiIconButtonComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiIconButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiIconButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
