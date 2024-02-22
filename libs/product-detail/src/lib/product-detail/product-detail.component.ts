/* eslint-disable @typescript-eslint/no-explicit-any */
import { candleMock } from './product.mock'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { of } from 'rxjs'
import { UiStarComponent } from '@rfs-dev-atomic/ui-star'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'

@Component({
	selector: 'rfs-dev-atomic-product-detail',
	standalone: true,
	imports: [
		CommonModule,
		UiButtonRowComponent,
		UiStarComponent,
		UiHashGroupComponent,
		UiChipComponent,
	],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
	product$ = of(candleMock)

	constructor() {
		console.log('ProductDetailComponent')
	}

	addToCart(product: any) {
		console.log('product', product)
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
