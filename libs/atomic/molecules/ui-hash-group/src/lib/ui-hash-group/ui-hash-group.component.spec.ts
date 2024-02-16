import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiHashGroupComponent } from './ui-hash-group.component'

describe('UiHashGroupComponent', () => {
	let component: UiHashGroupComponent
	let fixture: ComponentFixture<UiHashGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiHashGroupComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiHashGroupComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
