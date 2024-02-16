import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiIconComponent } from './ui-icon.component'

describe('UiIconComponent', () => {
	let component: UiIconComponent
	let fixture: ComponentFixture<UiIconComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiIconComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiIconComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
