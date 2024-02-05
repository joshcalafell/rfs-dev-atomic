import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MenuItemsComponent } from 'libs/ui-molecules/src'
import { BtnTextComponent } from '@rfs-dev-atomic/ui-atoms'

@Component({
	selector: 'rfs-dev-atomic-header',
	standalone: true,
	imports: [CommonModule, MenuItemsComponent, BtnTextComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
