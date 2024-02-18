import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiDetailGroupComponent } from './ui-detail-group.component'
import { UiDetailItemComponent } from '@rfs-dev-atomic/ui-detail-item'

describe('UiDetailGroupComponent', () => {
	let component: UiDetailGroupComponent
	let fixture: ComponentFixture<UiDetailGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiDetailItemComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiDetailGroupComponent)
		component = fixture.componentInstance
		component.items = [{ label: 'Test', value: 'Test' }]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
