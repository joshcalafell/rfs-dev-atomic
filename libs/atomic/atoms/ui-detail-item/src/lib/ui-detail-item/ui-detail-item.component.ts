import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-detail-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-detail-item.component.html',
	styleUrl: './ui-detail-item.component.scss',
})
export class UiDetailItemComponent {
	@Input() item: { label: string; value: string | number } = {
		label: '',
		value: '',
	}
}
