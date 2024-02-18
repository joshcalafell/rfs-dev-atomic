import { ICandleProduct } from '../model/IProduct.model'

const buttons = [
	{
		label: 'Cart',
		palleteColor: 'primary',
		size: 'medium',
		disabled: false,
	},
	{
		label: 'Wishlist',
		palleteColor: 'secondary',
		size: 'medium',
		disabled: false,
	},
]

export default <ICandleProduct[]>[
	{
		entity: {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C1',
		},
		buttons,
		brand: 'RFS',
		color: 'Brown',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Cedarwood & Vanilla',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Woody, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Cedarwood', 'Vanilla', 'Soy Wax', 'Brown', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cedarwood-vanilla-candle.jpg',
		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '1',
				name: 'Cedarwood & Vanilla',
				description: 'A warm, woody scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C1',
			},
		},
	},
	{
		entity: {
			id: '2',
			name: 'Cinnamon & Clove',
			description: 'A warm, spicy scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C2',
		},
		buttons,
		brand: 'RFS',
		color: 'Brown',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Cinnamon & Clove',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Spicy, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		quantity: 1,
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Cinnamon', 'Clove', 'Soy Wax', 'Brown', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',

		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '2',
				name: 'Cinnamon & Clove',
				description: 'A warm, spicy scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C2',
			},
		},
	},
	{
		entity: {
			id: '3',
			name: 'Eucalyptus & Mint',
			description: 'A cool, refreshing scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C3',
		},
		buttons,
		brand: 'RFS',
		color: 'Green',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Eucalyptus & Mint',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Cool, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		quantity: 1,
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Eucalyptus', 'Mint', 'Soy Wax', 'Green', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/eucalyptus-mint-candle.jpg',
		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '3',
				name: 'Eucalyptus & Mint',
				description: 'A cool, refreshing scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C3',
			},
		},
	},

	{
		entity: {
			id: '4',
			name: 'Lavender & Sage',
			description: 'A calming, herbal scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C4',
		},
		buttons,
		brand: 'RFS',
		color: 'Purple',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Lavender & Sage',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Calming, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		quantity: 1,
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Lavender', 'Sage', 'Soy Wax', 'Purple', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/lavender-sage-candle.jpg',

		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '4',
				name: 'Lavender & Sage',
				description: 'A calming, herbal scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C4',
			},
		},
	},
	{
		entity: {
			id: '5',
			name: 'Lemongrass & Jasmine',
			description: 'A bright, floral scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C5',
		},
		buttons,
		brand: 'RFS',
		color: 'Yellow',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Lemongrass & Jasmine',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Bright, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		quantity: 1,
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Lemongrass', 'Jasmine', 'Soy Wax', 'Yellow', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/lemongrass-jasmine-candle.jpg',
		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '6',
				name: 'Lilac & Rose',
				description: 'A bright  floral scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C6',
			},
		},
	},
	{
		entity: {
			id: '6',
			name: 'Lilac & Rose',
			description: 'A bright, floral scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C6',
		},
		buttons,
		brand: 'RFS',
		color: 'Pink',
		material: 'Soy Wax',
		dimensions: '3.5" x 3.5" x 3.5"',
		weight: '12 oz',
		fragrance: 'Lilac & Rose',
		size: '3.5" x 3.5" x 3.5"',
		burnTime: '60 hours',
		scent: 'Bright, Sweet',
		type: 'Candle',
		shape: 'Cylinder',
		wickType: 'Cotton',
		wickMaterial: 'Cotton',
		quantity: 1,
		category: 'Candles',
		subCategory: 'Candle',
		tags: ['Lilac', 'Rose', 'Soy Wax', 'Pink', 'Candle'],
		rating: 4.5,
		reviews: 100,
		stock: 100,
		isOnSale: false,
		saleStart: '',
		saleEnd: '',
		isFeatured: false,
		isTopSeller: false,
		isNew: false,
		isBestSeller: false,
		isSale: false,
		isAvailable: true,
		isOutOfStock: false,
		isComingSoon: false,
		isDiscontinued: false,
		isLimited: false,
		isSoldOut: false,
		isBackOrder: false,
		isPreOrder: false,
		isGift: false,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/lilac-rose-candle.jpg',
		subscription: {
			type: 'One-Time Purchase',
			isRecurring: false,
			entity: {
				id: '6',
				name: 'Lilac & Rose',
				description: 'A bright  floral scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C6',
			},
		},
	},
]
