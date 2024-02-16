import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-tag',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-tag.component.html',
	styleUrl: './ui-tag.component.scss',
})
export class UiTagComponent {
	@Input() tag = ''
	constructor() {
		console.log('UiTagComponent')
	}
}
