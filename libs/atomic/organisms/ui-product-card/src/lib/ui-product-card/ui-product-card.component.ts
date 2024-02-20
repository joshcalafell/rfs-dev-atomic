/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiCardTitleComponent } from '@rfs-dev-atomic/ui-card-title'
import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
import { UiDetailGroupComponent } from '@rfs-dev-atomic/ui-detail-group'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiStarComponent } from '@rfs-dev-atomic/ui-star'

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
		UiStarComponent,
	],
	templateUrl: './ui-product-card.component.html',
	styleUrl: './ui-product-card.component.scss',
})
export class UiProductCardComponent {
	@Output() addToCartEmitter = new EventEmitter()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product = {} as any

	cardImage = 'https://i.imgur.com/vL2h90y.jpg'

	constructor() {
		console.log('UiProductCardComponent')
	}

	addToCart(product: any) {
		this.addToCartEmitter.emit(product)
	}

	getProductDetailsGroup1(
		product: any
	): { label: string; value: string | number }[] {
		return [
			{ label: 'Scent', value: product.scent },
			{ label: 'Burn Time', value: product.burnTime },
			{ label: 'Wick', value: product.wickType },
			{ label: 'Size', value: product.size },
		]
	}

	getProductDetailsGroup2(
		product: any
	): { label: string; value: string | number }[] {
		return [
			{
				label: 'Availability',
				value: product.quantity ? 'In Stock' : 'Sold Out',
			},
			{ label: 'Color', value: product.color },
			{ label: 'Material', value: product.material },
			{ label: 'Weight', value: product.weight },
		]
	}

	getStars(product: any): { icon: string; color: string; size: string }[] {
		const rounded = Math.ceil(Number(product.rating))

		console.log('rounded', rounded)
		return [
			...Array(rounded).fill({ icon: 'star', color: 'black', size: 'small' }),
			...Array(5 - rounded).fill({
				icon: 'empty-star',
				color: 'black',
				size: 'small',
			}),
		]
	}
}
