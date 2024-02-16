import { IEntity } from '../model/IEntity.model'

interface IProductSubscription {
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
	saleStart: string
	saleEnd: string
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
	subscription: IProductSubscription
}

export interface ICandleProduct extends IProduct {
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

export const testCandles = []
