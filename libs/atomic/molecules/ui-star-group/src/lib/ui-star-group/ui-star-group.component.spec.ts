import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiLinkComponent } from '@rfs-dev-atomic/ui-link'
import { UiStarComponent } from '@rfs-dev-atomic/ui-star'
import { UiStarGroupComponent } from './ui-star-group.component'

describe('UiStarGroupComponent', () => {
	let component: UiStarGroupComponent
	let fixture: ComponentFixture<UiStarGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiLinkComponent, UiStarComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiStarGroupComponent)
		component = fixture.componentInstance
		component.product = {
			entity: {
				id: '1',
				name: 'Cedarwood & Vanilla',
				description: 'A warm, woody scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C1',
			},
			buttons: [
				{
					label: 'Cart',
					palleteColor: 'primary',
					disabled: false,
					size: 'medium',
				},
				{
					label: 'Wishlist',
					palleteColor: 'secondary',
					disabled: false,
					size: 'medium',
				},
			],
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
			isWishListed: false,
			cartQty: 1,
			image:
				'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cedarwood-vanilla-candle.jpg',
			subscription: {
				type: 'One-Time Purchase',
				isRecurring: true,
				entity: {
					id: '1',
					name: 'Cedarwood & Vanilla',
					description: 'A warm, woody scent with a hint of sweetness.',
					price: 24.99,
					sku: 'C1',
				},
			},
		}
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
