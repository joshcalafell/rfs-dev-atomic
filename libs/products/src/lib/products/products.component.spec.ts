// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiProductCardComponent } from 'libs/atomic/organisms/ui-product-card/src'
import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductsComponent } from './products.component'
import { Observable } from 'rxjs'

describe('ProductsComponent', () => {
	let component: ProductsComponent
	let fixture: ComponentFixture<ProductsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, UiProductCardComponent],
			providers: [
				{
					provide: 'ProductsService',
					useValue: {
						mockProductService: {
							getProducts: () => {
								return new Observable<unknown[]>()
							},
						},
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductsComponent)
		component = fixture.componentInstance

		component.products = [
			{
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
						size: 'medium',
						disabled: false,
					},
					{
						label: 'Wishlist',
						palleteColor: 'secondary',
						size: 'medium',
						disabled: false,
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
				rating: 5,
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
				isWishListed: true,
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
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a service', () => {
		expect(component.service).toBeDefined()
	})

	it('should have a getProducts method', () => {
		expect(component.getProducts).toBeDefined()
	})

	it('should have a getProducts method that returns an observable', () => {
		expect(component.getProducts()).toBeInstanceOf(Observable)
	})

	it('should have a getProducts method that returns an observable of ICandleProduct[]', () => {
		component.getProducts().subscribe((products) => {
			expect(products).toBeInstanceOf(Array)
			expect(products[0]).toHaveProperty('name')
			expect(products[0]).toHaveProperty('price')
			expect(products[0]).toHaveProperty('description')
			expect(products[0]).toHaveProperty('image')
		})
	})
})
