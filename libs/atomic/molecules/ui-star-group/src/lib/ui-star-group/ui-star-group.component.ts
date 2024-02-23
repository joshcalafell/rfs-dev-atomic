import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'

import { UiStarComponent } from '@rfs-dev-atomic/ui-star'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICandleProduct } from 'libs/products/src/lib/model/IProduct.model'

@Component({
	selector: 'rfs-dev-atomic-ui-star-group',
	standalone: true,
	imports: [CommonModule, UiStarComponent],
	templateUrl: './ui-star-group.component.html',
	styleUrl: './ui-star-group.component.scss',
})
export class UiStarGroupComponent implements OnInit {
	@Input() product = {} as ICandleProduct
	stars: { icon: string; color: string; size: string }[] = []

	ngOnInit(): void {
		this.stars = this.getStars(this.product)
	}

	public getStars(
		product: ICandleProduct
	): { icon: string; color: string; size: string }[] {
		const rounded = Math.ceil(Number(product.rating))

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
