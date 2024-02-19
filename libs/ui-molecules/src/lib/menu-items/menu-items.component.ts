// eslint-disable-next-line @nx/enforce-module-boundaries

import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IAtomicLink, UiLinkComponent } from '@rfs-dev-atomic/ui-link'

@Component({
	selector: 'rfs-dev-atomic-menu-items',
	standalone: true,
	imports: [CommonModule, UiLinkComponent],
	templateUrl: './menu-items.component.html',
	styleUrl: './menu-items.component.scss',
})
export class MenuItemsComponent {
	@Input() menuItems: IAtomicLink[] = []
}
