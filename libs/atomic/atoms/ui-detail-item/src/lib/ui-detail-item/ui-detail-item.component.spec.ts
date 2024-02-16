import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiDetailItemComponent } from './ui-detail-item.component'

describe('UiDetailItemComponent', () => {
	let component: UiDetailItemComponent
	let fixture: ComponentFixture<UiDetailItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiDetailItemComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiDetailItemComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
