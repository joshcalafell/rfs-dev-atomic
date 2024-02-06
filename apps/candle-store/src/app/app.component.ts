import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ChipComponent, InputQuantityComponent } from '@rfs-dev-atomic/ui-atoms'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { FooterComponent, HeaderComponent } from 'libs/ui-organisms/src'

@Component({
	standalone: true,
	imports: [HeaderComponent, FooterComponent, RouterModule],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'CANDLE STORE'
	image_src = 'https://i.postimg.cc/pLyyV7S8/candles-set-one.jpg'
	menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Products', path: '/products' },
		{ label: 'Contact', path: '/contact' },
		{ label: 'Wishlist', path: '/wishlist' },
		{ label: 'Orders', path: '/orders' },
		{ label: 'Cart', path: '/cart' },
	]
	isLoggedIn = false
}
