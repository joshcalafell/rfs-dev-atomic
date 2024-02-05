import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MenuItemsComponent } from './menu-items.component'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LinkComponent } from 'libs/ui-atoms/src'

describe('MenuItemsComponent', () => {
	let component: MenuItemsComponent
	let fixture: ComponentFixture<MenuItemsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuItemsComponent, LinkComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(MenuItemsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render the menu items', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('rfs-dev-atomic-link')).toBeTruthy()
	})
})
