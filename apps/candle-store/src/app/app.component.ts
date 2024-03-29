import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiFooterComponent } from '@rfs-dev-atomic/ui-footer'
import { UiHeaderComponent } from '@rfs-dev-atomic/ui-header'

@Component({
	standalone: true,
	imports: [CommonModule, UiHeaderComponent, UiFooterComponent, RouterModule],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	colorScheme = 'dark'
	title = 'CANDLE STORE'
	user: { name: string; email: string } = {} as unknown as {
		name: string
		email: string
	}

	links = [
		{ label: 'About', path: '/about', color: 'light' },
		{ label: 'Products', path: '/products', color: 'light' },
		{ label: 'Wishlist', path: '/wishlist', color: 'light' },
		{ label: 'Orders', path: '/orders', color: 'light' },
		{ label: 'Cart', path: '/cart', color: 'light' },
	]
}
