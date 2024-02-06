import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BtnIconComponent } from './btn-icon.component'

describe('BtnIconComponent', () => {
	let component: BtnIconComponent
	let fixture: ComponentFixture<BtnIconComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BtnIconComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(BtnIconComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should emit click event', () => {
		const spy = jest.spyOn(component.clickEmitter, 'emit')
		component.onClickHandler()
		expect(spy).toHaveBeenCalled()
	})

	it('should have a default type of button', () => {
		expect(component.type).toEqual('button')
	})

	it('should have a default value of an empty string', () => {
		expect(component.label).toEqual('')
	})

	it('should have a default value of false for disabled', () => {
		expect(component.disabled).toEqual(false)
	})
})
