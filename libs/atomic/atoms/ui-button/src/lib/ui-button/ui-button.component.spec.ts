import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiButtonComponent } from './ui-button.component'

describe('UiButtonComponent', () => {
	let component: UiButtonComponent
	let fixture: ComponentFixture<UiButtonComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiButtonComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(UiButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
