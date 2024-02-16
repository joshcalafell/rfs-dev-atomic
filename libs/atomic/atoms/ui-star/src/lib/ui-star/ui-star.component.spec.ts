import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiStarComponent } from './ui-star.component'

describe('UiStarComponent', () => {
	let component: UiStarComponent
	let fixture: ComponentFixture<UiStarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiStarComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiStarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
