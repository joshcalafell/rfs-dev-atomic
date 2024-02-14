import { UiHeaderComponent } from '@rfs-dev-atomic/ui-header'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProductListComponent } from '@rfs-dev-atomic/products'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'

@Component({
	standalone: true,
	imports: [
		RouterModule,
		ProductListComponent,
		UiHeaderComponent,
		UiButtonComponent,
	],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Inventory'
	links: { label: string; path: string }[] = [
		{ label: 'Home', path: '/' },
		{ label: 'Products', path: '/products' },
	]
	user: { name: string; email: string } = {
		name: 'Hal Doe',
		email: 'haldoe@szaje.com',
	}
}
