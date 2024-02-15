// eslint-disable-next-line @nx/enforce-module-boundaries

import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChipComponent } from '@rfs-dev-atomic/ui-atoms'

@Component({
	selector: 'rfs-dev-atomic-ui-product-card',
	standalone: true,
	imports: [CommonModule, UiProductCardComponent, ChipComponent],
	templateUrl: './ui-product-card.component.html',
	styleUrl: './ui-product-card.component.scss',
})
export class UiProductCardComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product: any

	constructor() {
		console.log('UiProductCardComponent')
	}
}
