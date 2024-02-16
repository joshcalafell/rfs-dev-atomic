import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiButtonRowComponent } from './ui-button-row.component'

describe('UiButtonRowComponent', () => {
	let component: UiButtonRowComponent
	let fixture: ComponentFixture<UiButtonRowComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiButtonRowComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiButtonRowComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
