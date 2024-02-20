import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-star-group',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-star-group.component.html',
	styleUrl: './ui-star-group.component.scss',
})
export class UiStarGroupComponent {
	@Input() rating = 0

	constructor() {
		console.log('UiStarGroupComponent')
	}
}
