import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'
import { RouterModule } from '@angular/router'
import { UiTopMenuComponent } from '@rfs-dev-atomic/ui-top-menu'

@Component({
	selector: 'rfs-dev-atomic-ui-header',
	standalone: true,
	imports: [CommonModule, UiButtonComponent, RouterModule, UiTopMenuComponent],
	templateUrl: './ui-header.component.html',
	styleUrl: './ui-header.component.scss',
})
export class UiHeaderComponent {
	@Input() user!: { name: string; email: string }

	@Input() title = 'INVENTORY'

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() menuItems = [] as any[]
}
