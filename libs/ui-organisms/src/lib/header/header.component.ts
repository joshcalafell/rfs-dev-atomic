import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MenuItemsComponent } from 'libs/ui-molecules/src'
import { BtnTextComponent, LinkComponent } from '@rfs-dev-atomic/ui-atoms'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-header',
	standalone: true,
	imports: [
		CommonModule,
		MenuItemsComponent,
		BtnTextComponent,
		RouterModule,
		LinkComponent,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input() menuItems: ILink[] = []
	@Input() isLoggedIn = false
	@Input() title = ''

	@Output() cartClick = new EventEmitter()

	constructor() {
		console.log('HeaderComponent')
	}

	onCartClick() {
		console.log('Cart Clicked')
		this.cartClick.emit()
	}
}
