import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiStarComponent } from './ui-star.component'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'

describe('UiStarComponent', () => {
	let component: UiStarComponent
	let fixture: ComponentFixture<UiStarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiStarComponent, UiIconComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiStarComponent)
		component = fixture.componentInstance

		component.star = {
			icon: 'star',
			color: 'black',
			size: 'medium',
		}
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a star', () => {
		expect(component.star).toBeDefined()
	})

	it('should have a star icon', () => {
		expect(component.star.icon).toBeDefined()
	})

	it('should have a star color', () => {
		expect(component.star.color).toBeDefined()
	})

	it('should have a star size', () => {
		expect(component.star.size).toBeDefined()
	})
})
