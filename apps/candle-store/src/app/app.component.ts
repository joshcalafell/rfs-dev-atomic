import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { FooterComponent, HeaderComponent } from 'libs/ui-organisms/src'

@Component({
	standalone: true,
	imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'CANDLE STORE'
	isLoggedIn = false
	menuItems = <ILink[]>[
		{
			label: 'About',
			path: '/about',
			target: '_self',
			rel: '',
			title: 'About Link',
			color: 'primary',
			disabled: false,
			underline: false,
			icon: '',
			alt: '',
		},
		{
			label: 'Products',
			path: '/products',
			target: '_self',
			rel: '',
			title: 'Products Link',
			color: 'primary',
			disabled: false,
			underline: false,
			icon: '',
			alt: '',
		},
		{
			label: 'Contact',
			path: '/contact',
			target: '_self',
			rel: '',
			title: 'Contact Link',
			color: 'primary',
			disabled: false,
			underline: false,
			icon: '',
			alt: '',
		},
		{
			label: 'Cart',
			path: '/cart',
			target: '_self',
			rel: '',
			title: 'Cart Link',
			color: 'primary',
			disabled: false,
			underline: false,
			icon: '',
			alt: '',
		},
	]
}
