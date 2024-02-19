import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MenuItemsComponent } from './menu-items.component'
import { IAtomicLink, UiLinkComponent } from '@rfs-dev-atomic/ui-link'
import { isUtf8 } from 'buffer'

describe('MenuItemsComponent', () => {
	let component: MenuItemsComponent
	let fixture: ComponentFixture<MenuItemsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuItemsComponent, UiLinkComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(MenuItemsComponent)
		component = fixture.componentInstance
		component.menuItems = [
			{
				label: 'Home',
				path: '/home',
				rel: 'noopener noreferrer',
				target: '_blank',
				href: '/home',
				download: 'home',
				isActive: false,
				onClick: () => {
					console.log('Home')
				},
			},
			{
				label: 'About',
				path: '/about',
				rel: 'noopener noreferrer',
				target: '_blank',
				href: '/about',
				download: 'about',
				isActive: false,
				onClick: () => {
					console.log('About')
				},
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render the menu items', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('.topnav .topnav-item')).toBeTruthy()
	})

	it('should render 2 menu items', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('.topnav-item').length).toBe(2)
	})

	it('should render the home menu item', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('.topnav-item')[0].textContent).toContain(
			'Home'
		)
	})

	it('should render the about menu item', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('.topnav-item')[1].textContent).toContain(
			'About'
		)
	})

	isUtf8
})
