import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MenuItemsComponent } from 'libs/ui-molecules/src'
import { BtnTextComponent } from '@rfs-dev-atomic/ui-atoms'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'

@Component({
	selector: 'rfs-dev-atomic-header',
	standalone: true,
	imports: [CommonModule, MenuItemsComponent, BtnTextComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input() menuItems: ILink[] = []
	@Input() isLoggedIn = false

	onLoginClick: EventListener = () => {
		console.log('Login clicked')
	}

	onSignupClick: EventListener = () => {
		console.log('Signup clicked')
	}

	onLogoutClick: EventListener = () => {
		console.log('Logout clicked')
	}
}
