import { UiHeaderComponent } from '@rfs-dev-atomic/ui-header'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
	standalone: true,
	imports: [RouterModule, UiHeaderComponent],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'INVENTORY'
	links: { label: string; path: string }[] = [
		{ label: 'Home', path: '/' },
		{ label: 'Products', path: '/products' },
	]
	user: { name: string; email: string } = {
		name: 'Hal Doe',
		email: 'haldoe@szaje.com',
	}
}
