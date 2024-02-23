/* eslint-disable @typescript-eslint/no-explicit-any */
import { candleMock } from './product.mock'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { of } from 'rxjs'

import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
import { UiStarGroupComponent } from '@rfs-dev-atomic/ui-star-group'

@Component({
	selector: 'rfs-dev-atomic-product-detail',
	standalone: true,
	imports: [
		CommonModule,
		UiButtonRowComponent,
		UiStarGroupComponent,
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
}
