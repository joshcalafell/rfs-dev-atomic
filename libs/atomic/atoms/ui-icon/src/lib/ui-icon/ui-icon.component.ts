import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-icon.component.html',
	styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
	@Input() icon = '💥'
	constructor() {
		console.log('UiIconComponent')
	}
}
