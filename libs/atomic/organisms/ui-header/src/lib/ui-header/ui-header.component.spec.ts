import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiHeaderComponent } from './ui-header.component'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'
import { UiTopMenuComponent } from '@rfs-dev-atomic/ui-top-menu'

describe('UiHeaderComponent', () => {
	let component: UiHeaderComponent
	let fixture: ComponentFixture<UiHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				UiHeaderComponent,
				UiButtonComponent,
				UiTopMenuComponent,
				RouterTestingModule,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(UiHeaderComponent)

		component = fixture.componentInstance

		component.title = 'INVENTORY'

		component.user = {
			name: 'Hal Doe',
			email: 'my-email@something.com',
		}

		component.menuItems = [
			{
				label: 'Home',
				path: '/',
			},
			{
				label: 'About',
				path: '/about',
			},
			{
				label: 'Contact',
				path: '/contact',
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a user', () => {
		expect(component.user).toBeTruthy()
	})

	it('should have links', () => {
		expect(component.menuItems).toBeTruthy()
	})

	it('should have a link to Home', () => {
		const link = component.menuItems.find((l) => l.label === 'Home')
		expect(link).toBeTruthy()
	})

	it('should have a link to About', () => {
		const link = component.menuItems.find((l) => l.label === 'About')
		expect(link).toBeTruthy()
	})

	it('should have a link to Contact', () => {
		const link = component.menuItems.find((l) => l.label === 'Contact')
		expect(link).toBeTruthy()
	})

	it('should have a user name', () => {
		expect(component.user.name).toBeTruthy()
	})

	it('should have a user email', () => {
		expect(component.user.email).toBeTruthy()
	})

	it('should have a user name of "Hal Doe"', () => {
		expect(component.user.name).toEqual('Hal Doe')
	})

	it('should have a user email of "my-email@something.com"', () => {
		expect(component.user.email).toEqual('my-email@something.com')
	})
})
