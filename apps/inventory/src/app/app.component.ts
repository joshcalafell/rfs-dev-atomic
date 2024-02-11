import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component'
import { ProductListComponent } from '@rfs-dev-atomic/products'

@Component({
	standalone: true,
	imports: [NxWelcomeComponent, RouterModule, ProductListComponent],
	selector: 'rfs-dev-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'inventory'
}
