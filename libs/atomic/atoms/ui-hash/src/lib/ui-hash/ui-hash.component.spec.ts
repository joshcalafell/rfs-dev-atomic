import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiHashComponent } from './ui-hash.component'

describe('UiHashComponent', () => {
	let component: UiHashComponent
	let fixture: ComponentFixture<UiHashComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiHashComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiHashComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
