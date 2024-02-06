import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InputQuantityComponent } from './input-quantity.component'

describe('InputQuantityComponent', () => {
	let component: InputQuantityComponent
	let fixture: ComponentFixture<InputQuantityComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [InputQuantityComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(InputQuantityComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a default value of 0', () => {
		expect(component.value).toEqual(0)
	})
})
