import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { BtnTextComponent } from '@rfs-dev-atomic/ui-atoms'
import { MenuItemsComponent } from '@rfs-dev-atomic/ui-molecules'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderComponent, BtnTextComponent, MenuItemsComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance
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
