import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartItemComponent } from './cart-item.component'

describe('CartItemComponent', () => {
	let component: CartItemComponent
	let fixture: ComponentFixture<CartItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CartItemComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CartItemComponent)
		component = fixture.componentInstance

		component.item = {
			id: 1,
			name: 'Test Item',
			description: 'A test item',
			price: 100,
			quantity: 1,
			image: 'https://via.placeholder.com/150',
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
