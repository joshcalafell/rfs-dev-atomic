import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiChipComponent } from './ui-chip.component'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'

describe('UiChipComponent', () => {
	let component: UiChipComponent
	let fixture: ComponentFixture<UiChipComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiChipComponent, UiIconComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiChipComponent)
		component = fixture.componentInstance

		// Settings (basic happy path)
		component.label = 'Test'
		component.color = 'primary'

		// Detect changes before each test...
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a label', () => {
		expect(component.label).toBeDefined()
	})

	it('should have a color', () => {
		expect(component.color).toBeDefined()
	})
})
