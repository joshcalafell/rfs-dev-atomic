import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
// eslint-disable-next-line @nx/enforce-module-boundaries

import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICandleProduct } from 'libs/products/src/lib/model/IProduct.model'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiCardTitleComponent } from '@rfs-dev-atomic/ui-card-title'
import { UiDetailGroupComponent } from '@rfs-dev-atomic/ui-detail-group'

@Component({
	selector: 'rfs-dev-atomic-ui-product-card',
	standalone: true,
	imports: [
		CommonModule,
		UiCardTitleComponent,
		UiChipComponent,
		UiDetailGroupComponent,
		UiButtonRowComponent,
		UiHashGroupComponent,
	],
	templateUrl: './ui-product-card.component.html',
	styleUrl: './ui-product-card.component.scss',
})
export class UiProductCardComponent {
	@Output() addToCartEmitter = new EventEmitter<ICandleProduct>()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product: ICandleProduct = {
		entity: { price: 0 },
		size: '',
		scent: '',
		type: '',
		burnTime: '',
		wickType: '',
	} as ICandleProduct

	constructor() {
		console.log('UiProductCardComponent')
	}

	addToCart(product: ICandleProduct) {
		this.addToCartEmitter.emit(product)
	}

	getProductDetailsGroups(
		product: ICandleProduct
	): { label: string; value: string | number }[] {
		return [
			{ label: 'Price', value: product.entity.price },
			{ label: 'Size', value: product.size },
			{ label: 'Scent', value: product.scent },
			{ label: 'Type', value: product.type },
			{ label: 'Burn Time', value: product.burnTime },
			{ label: 'Wick', value: product.wickType },
		]
	}
}
