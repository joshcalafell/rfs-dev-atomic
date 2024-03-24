import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'
import { FadeInOut } from './animations'

@Component({
	selector: 'rfs-dev-atomic-cart-item',
	standalone: true,
	imports: [CommonModule, UiButtonComponent],
	templateUrl: './cart-item.component.html',
	styleUrl: './cart-item.component.scss',
	animations: [FadeInOut(200, 200, true)],
})
export class CartItemComponent {
	@Input() item: any = {}
	@Input() index = 0
	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	removeItemHandler(item: any): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[CartItem] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
	}

	wishlistItemHandler(item: any): void {
		console.log('[CartItem] wishlistItemHandler', item)
		this.wishlistItemEmitter.emit(item)
	}
}
