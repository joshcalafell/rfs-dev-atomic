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
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
