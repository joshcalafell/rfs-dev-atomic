import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartItemComponent } from '../cart-item/cart-item.component'

@Component({
	selector: 'rfs-dev-atomic-cart',
	standalone: true,
	imports: [CommonModule, CartItemComponent],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
	items: any[] = [
		{
			id: 1,
			name: 'Test Cart Item 1',
			description: 'A test item',
			price: 24.99,
			quantity: 1,
			image: '	https://i.imgur.com/vL2h90y.jpg',
		},
		{
			id: 2,
			name: 'Test Cart Item 2',
			description: 'A test item',
			price: 23.11,
			quantity: 2,
			image: '	https://i.imgur.com/vL2h90y.jpg',
		},
		{
			id: 3,
			name: 'Test Cart Item 3',
			description: 'A test item',
			price: 100.01,
			quantity: 3,
			image: '	https://i.imgur.com/vL2h90y.jpg',
		},
	]

	total = 0
	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	constructor() {
		this.calculateTotal()
	}

	ngOnInit(): void {
		console.log('[Cart] ngOnInit', this.items)
	}

	calculateTotal() {
		this.total = Number(
			this.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
		)
	}

	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[Cart] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
		this.calculateTotal()
	}

	wishlistItemHandler(item: unknown): void {
		// TODO: Implement
		console.log('[Cart] addToCart', item)
	}
}
