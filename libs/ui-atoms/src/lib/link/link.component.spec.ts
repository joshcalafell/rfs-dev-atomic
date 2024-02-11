import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LinkComponent } from './link.component'

describe('LinkComponent', () => {
	let component: LinkComponent
	let fixture: ComponentFixture<LinkComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LinkComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(LinkComponent)
		component = fixture.componentInstance
		/** Test Home Link for Object.assign re-use */
		component.link = {
			label: 'Home',
			path: '/',
			icon: '',
			alt: '',
			disabled: false,
			underline: false,
			color: 'primary',
			target: '_self',
			title: 'Home Link',
			rel: 'noopener noreferrer',
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render the component', () => {
		expect(fixture.nativeElement.querySelector('a')).toBeTruthy()
	})

	it('should render the component with the correct label', () => {
		const label = 'Home'
		component.link = Object.assign({}, component.link, { label })
		fixture.detectChanges()
		expect(fixture.nativeElement.querySelector('a').textContent).toContain(
			label
		)
	})
})
