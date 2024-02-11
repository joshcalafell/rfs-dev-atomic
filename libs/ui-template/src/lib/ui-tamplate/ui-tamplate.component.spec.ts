import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiTamplateComponent } from './ui-tamplate.component'

describe('UiTamplateComponent', () => {
	let component: UiTamplateComponent
	let fixture: ComponentFixture<UiTamplateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiTamplateComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiTamplateComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
