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
		component.icon = 'icon'
		component.removable = true
		component.disabled = true
		component.selected = true
		component.outlined = true
		component.rounded = true

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

	it('should have an icon', () => {
		expect(component.icon).toBeDefined()
	})

	it('should have a removable', () => {
		expect(component.removable).toBeDefined()
	})

	it('should have a disabled', () => {
		expect(component.disabled).toBeDefined()
	})

	it('should have a selected', () => {
		expect(component.selected).toBeDefined()
	})

	it('should have a outlined', () => {
		expect(component.outlined).toBeDefined()
	})

	it('should have a rounded', () => {
		expect(component.rounded).toBeDefined()
	})
})
