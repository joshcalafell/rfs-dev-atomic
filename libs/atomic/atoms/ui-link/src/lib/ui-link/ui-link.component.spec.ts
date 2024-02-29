import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiLinkComponent } from './ui-link.component'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'

describe('UiLinkComponent', () => {
	let component: UiLinkComponent
	let fixture: ComponentFixture<UiLinkComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, UiIconComponent],
			providers: [
				{
					provide: 'activateRoute',
					useValue: {
						snapshot: { url: [{ path: '/primary' }] },
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(UiLinkComponent)
		component = fixture.componentInstance

		component.link = {
			label: 'Primary',
			path: '/primary',
			rel: 'noopener noreferrer',
			target: '_blank',
			href: '/primary',
			download: 'primary',
			isActive: false,
			onClick: () => {
				console.log('Link clicked')
			},
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a link', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('a')).toBeTruthy()
	})

	it('should have a link with the correct text', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').textContent = 'Primary'
		expect(compiled.querySelector('a').textContent).toContain('Primary')
	})

	it('should have a link with the correct color when primary link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--primary')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--primary')
		).toBeTruthy()
	})

	it('should have a link with the correct color when secondary link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--secondary')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--secondary')
		).toBeTruthy()
	})

	it('should have a link with the correct color when tertiary link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--tertiary')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--tertiary')
		).toBeTruthy()
	})

	it('should have a link with the correct color when danger link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--danger')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--danger')
		).toBeTruthy()
	})

	it('should have a link with the correct color when warning link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--warning')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--warning')
		).toBeTruthy()
	})

	it('should have a link with the correct color when success link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--success')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--success')
		).toBeTruthy()
	})

	it('should have a link with the correct color when info link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--info')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--info')
		).toBeTruthy()
	})

	it('should have a link with the correct color when light link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--light')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--light')
		).toBeTruthy()
	})

	it('should have a link with the correct color when dark link', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--dark')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--dark')
		).toBeTruthy()
	})

	it('should have a link with the correct color when link is active', () => {
		component.link.isActive = true
		fixture.detectChanges()
		const compiled = fixture.nativeElement
		compiled.querySelector('a').classList.add('ui-link--active')
		expect(
			compiled.querySelector('a').classList.contains('ui-link--active')
		).toBeTruthy()
	})
})
