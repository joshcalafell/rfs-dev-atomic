import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { UiLinkComponent } from '@rfs-dev-atomic/ui-link'

@Component({
	selector: 'rfs-dev-atomic-ui-top-menu',
	standalone: true,
	imports: [CommonModule, UiTopMenuComponent, UiLinkComponent],
	templateUrl: './ui-top-menu.component.html',
	styleUrl: './ui-top-menu.component.scss',
})
export class UiTopMenuComponent {
	@Input() menuItems: any[] = []
}
