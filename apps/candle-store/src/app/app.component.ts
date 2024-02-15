import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiHeaderComponent } from '@rfs-dev-atomic/ui-header'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { FooterComponent } from 'libs/ui-organisms/src'

@Component({
	standalone: true,
	imports: [CommonModule, UiHeaderComponent, FooterComponent, RouterModule],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'CANDLE STORE'
	user: { name: string; email: string } = {} as unknown as {
		name: string
		email: string
	}
	links = [
		{ label: 'About', path: '/about' },
		{ label: 'Products', path: '/products' },
		{ label: 'Orders', path: '/orders' },
		{ label: 'Cart', path: '/cart' },
	]
}
