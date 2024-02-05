// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterLink, RouterModule } from '@angular/router'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LinkComponent } from 'libs/ui-atoms/src' // TODO: Figure this out...

@Component({
	selector: 'rfs-dev-atomic-menu-items',
	standalone: true,
	imports: [CommonModule, RouterModule, RouterLink, LinkComponent],
	templateUrl: './menu-items.component.html',
	styleUrl: './menu-items.component.scss',
})
export class MenuItemsComponent {
	@Input() menuItems: ILink[] = []
}
