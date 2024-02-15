import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
// eslint-disable-next-line @nx/enforce-module-boundaries

@Component({
	selector: 'rfs-dev-atomic-ui-products',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-products.component.html',
	styleUrl: './ui-products.component.css',
})
export class UiProductsComponent {}
