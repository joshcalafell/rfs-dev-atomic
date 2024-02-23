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
})
