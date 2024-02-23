import { IEntity } from './IEntity.model'

interface IProductSubscription {
	type: string
	entity: IEntity
	isRecurring: boolean
}

interface IProductButton {
	label: string
	palleteColor?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'danger'
		| 'warning'
		| 'success'
		| 'info'
		| 'light'
		| 'dark'
		| 'link'
	disabled?: boolean
	size?: 'medium' | 'large' | 'small'
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
	isWishListed: boolean
	cartQty: number
	isGift: boolean
	subscription: IProductSubscription
	buttons: IProductButton[]
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
