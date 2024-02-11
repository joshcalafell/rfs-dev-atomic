import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IEntity } from 'IEntity.model'

interface ISubscription {
	type: string
	entity: IEntity
	isRecurring: boolean
}

interface IProduct {
	entity: IEntity
	image: string
	category: string
	subCategory: string
	tags: string[]
	rating: number
	reviews: number
	stock: number
	isOnSale: boolean
	saleStart: Date
	saleEnd: Date
	isFeatured: boolean
	isTopSeller: boolean
	isNew: boolean
	isBestSeller: boolean
	isSale: boolean
	isAvailable: boolean
	isOutOfStock: boolean
	isComingSoon: boolean
	isDiscontinued: boolean
	isLimited: boolean
	isSoldOut: boolean
	isBackOrder: boolean
	isPreOrder: boolean
	isGift: boolean
	subscription: ISubscription
}
export interface ICandleProduct extends IProduct {
	product: IProduct
	fragrance: string
	color: string
	size: string
	burnTime: string
	scent: string
	brand: string
	type: string
	material: string
	shape: string
	weight: string
	dimensions: string
	wickType: string
	wickMaterial: string
}

// Add 'as ICandleProduct[]' to explicitly type the array as ICandleProduct[]
@Component({
	selector: 'rfs-dev-atomic-product-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './product-list.component.html',
	styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
	@Input() products?: any
}
