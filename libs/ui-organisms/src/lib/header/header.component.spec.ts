import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { BtnTextComponent, LinkComponent } from '@rfs-dev-atomic/ui-atoms'
import { MenuItemsComponent } from '@rfs-dev-atomic/ui-molecules'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HeaderComponent,
				BtnTextComponent,
				MenuItemsComponent,
				RouterTestingModule,
				LinkComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance

		component.menuItems = [
			{
				label: 'About',
				path: '/about',
				target: '_self',
				rel: '',
				title: 'About Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Products',
				path: '/products',
				target: '_self',
				rel: '',
				title: 'Products Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Contact',
				path: '/contact',
				target: '_self',
				rel: '',
				title: 'Contact Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Cart',
				path: '/cart',
				target: '_self',
				rel: '',
				title: 'Cart Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render the header', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('rfs-dev-atomic-btn-text')).toBeTruthy()
	})

	it('should render the menu items', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('rfs-dev-atomic-menu-items')).toBeTruthy()
	})
})
