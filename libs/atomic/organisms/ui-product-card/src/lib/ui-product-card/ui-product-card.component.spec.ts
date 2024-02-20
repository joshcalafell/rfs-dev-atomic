import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiProductCardComponent } from './ui-product-card.component'
import { UiChipComponent } from '@rfs-dev-atomic/ui-chip'
import { UiTagComponent } from '@rfs-dev-atomic/ui-tag'
import { UiButtonRowComponent } from '@rfs-dev-atomic/ui-button-row'
import { UiDetailGroupComponent } from '@rfs-dev-atomic/ui-detail-group'
import { UiCardTitleComponent } from '@rfs-dev-atomic/ui-card-title'
import { UiHashGroupComponent } from '@rfs-dev-atomic/ui-hash-group'
import { UiStarComponent } from '@rfs-dev-atomic/ui-star'

describe('UiProductCardComponent', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let component: UiProductCardComponent
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let fixture: ComponentFixture<UiProductCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				UiCardTitleComponent,
				UiChipComponent,
				UiDetailGroupComponent,
				UiButtonRowComponent,
				UiHashGroupComponent,
				UiStarComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(UiProductCardComponent)
		component = fixture.componentInstance

		// Settings (basic happy path)
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
		}
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
