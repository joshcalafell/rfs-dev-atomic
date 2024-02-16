import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiDetailGroupComponent } from './ui-detail-group.component'

describe('UiDetailGroupComponent', () => {
	let component: UiDetailGroupComponent
	let fixture: ComponentFixture<UiDetailGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiDetailGroupComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiDetailGroupComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
