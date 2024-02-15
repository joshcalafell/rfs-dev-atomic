import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiTopMenuComponent } from './ui-top-menu.component'
import { UiLinkComponent } from '@rfs-dev-atomic/ui-link'

describe('UiTopMenuComponent', () => {
	let component: UiTopMenuComponent
	let fixture: ComponentFixture<UiTopMenuComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiTopMenuComponent, UiLinkComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiTopMenuComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
