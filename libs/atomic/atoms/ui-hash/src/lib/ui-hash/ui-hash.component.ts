import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-hash',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-hash.component.html',
	styleUrl: './ui-hash.component.scss',
})
export class UiHashComponent {
	@Input() hash = ''
}
