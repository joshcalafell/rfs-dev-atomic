import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiButtonRowComponent } from './ui-button-row.component'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'
import exp = require('constants')

describe('UiButtonRowComponent', () => {
	let component: UiButtonRowComponent
	let fixture: ComponentFixture<UiButtonRowComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiButtonRowComponent, UiButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiButtonRowComponent)
		component = fixture.componentInstance

		component.buttons = [
			{
				title: 'Button 1',
				palleteColor: 'primary',
				disabled: false,
				size: 'medium',
			},
			{
				title: 'Button 2',
				palleteColor: 'primary',
				disabled: false,
				size: 'medium',
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
