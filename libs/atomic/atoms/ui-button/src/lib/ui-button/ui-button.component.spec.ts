import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiButtonComponent } from './ui-button.component'
import exp = require('constants')

describe('UiButtonComponent', () => {
	let component: UiButtonComponent
	let fixture: ComponentFixture<UiButtonComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiButtonComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(UiButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a button', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('button')).toBeTruthy()
	})

	it('should have a button with the correct text', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').textContent = 'Hi!'
		expect(compiled.querySelector('button').textContent).toContain('Hi!')
	})

	it('should have a button with the correct color when primary button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--primary')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--primary')
		).toBeTruthy()
	})

	it('should have a button with the correct color when secondary button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--secondary')
		expect(
			compiled
				.querySelector('button')
				.classList.contains('ui-button--secondary')
		).toBeTruthy()
	})

	it('should have a button with the correct color when tertiary button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--tertiary')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--tertiary')
		).toBeTruthy()
	})

	it('should have a button with the correct color when danger button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--danger')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--danger')
		).toBeTruthy()
	})

	it('should have a button with the correct color when warning button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--warning')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--warning')
		).toBeTruthy()
	})

	it('should have a button with the correct color when success button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--success')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--success')
		).toBeTruthy()
	})

	it('should have a button with the correct color when info button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--info')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--info')
		).toBeTruthy()
	})

	it('should have a button with the correct color when light button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--light')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--light')
		).toBeTruthy()
	})

	it('should have a button with the correct color when dark button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--dark')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--dark')
		).toBeTruthy()
	})

	it('should have a button with the correct default size of medium', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('button').classList.contains('ui-button--medium')
		).toBeTruthy()
	})

	it('should have a button with the correct size when medium button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--medium')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--medium')
		).toBeTruthy()
	})

	it('should have a button with the correct size when small button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--small')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--small')
		).toBeTruthy()
	})

	it('should have a button with the correct size when large button', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('button').classList.add('ui-button--large')
		expect(
			compiled.querySelector('button').classList.contains('ui-button--large')
		).toBeTruthy()
	})

	it('should have a button with the correct type', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('button').type).toContain('button')
	})

	it('should have a button with that correct excutes a click event', () => {
		const compiled = fixture.nativeElement
		const button = compiled.querySelector('button')
		jest.spyOn(component, 'onClick')
		button.click()
		expect(component.onClick).toHaveBeenCalled()
	})
})
