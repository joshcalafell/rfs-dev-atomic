import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BtnTextComponent } from './btn-text.component'

describe('BtnTextComponent', () => {
	let component: BtnTextComponent
	let fixture: ComponentFixture<BtnTextComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BtnTextComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(BtnTextComponent)
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
		expect(component.text).toEqual('')
	})

	it('should have a default value of false for disabled', () => {
		expect(component.disabled).toEqual(false)
	})
})
