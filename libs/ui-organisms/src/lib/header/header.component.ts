import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MenuItemsComponent } from 'libs/ui-molecules/src'

@Component({
	selector: 'rfs-dev-atomic-header',
	standalone: true,
	imports: [CommonModule, MenuItemsComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {}
