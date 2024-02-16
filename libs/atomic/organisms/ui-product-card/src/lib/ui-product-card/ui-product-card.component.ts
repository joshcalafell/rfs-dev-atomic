import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
// eslint-disable-next-line @nx/enforce-module-boundaries

import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiTagComponent } from '@rfs-dev-atomic/ui-tag'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICandleProduct } from 'libs/products/src/lib/model/IProduct.model'

@Component({
	selector: 'rfs-dev-atomic-ui-product-card',
	standalone: true,
	imports: [
		CommonModule,
		UiProductCardComponent,
		UiChipComponent,
		UiTagComponent,
	],
	templateUrl: './ui-product-card.component.html',
	styleUrl: './ui-product-card.component.scss',
})
export class UiProductCardComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product: ICandleProduct = {} as ICandleProduct

	constructor() {
		console.log('UiProductCardComponent')
	}
}
