import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiStarGroupComponent } from './ui-star-group.component'

describe('UiStarGroupComponent', () => {
	let component: UiStarGroupComponent
	let fixture: ComponentFixture<UiStarGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiStarGroupComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiStarGroupComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
