import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-ui-header',
	standalone: true,
	imports: [CommonModule, UiButtonComponent, RouterModule],
	templateUrl: './ui-header.component.html',
	styleUrl: './ui-header.component.scss',
})
export class UiHeaderComponent {
	@Input() user: {
		name: string
		email: string
	} = {} as unknown as { name: string; email: string }

	@Input() title = 'Inventory'

	@Input() links: { label: string; path: string }[] = []
}
