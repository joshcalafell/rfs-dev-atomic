import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'
type IChipVariant = 'price' | 'date' | 'label' | 'status' | 'default' | 'stock'
export interface IChip {
	label: string
	color: 'primary' | 'secondary' | 'tertiary'
}

@Component({
	selector: 'rfs-dev-atomic-ui-chip',
	standalone: true,
	imports: [CommonModule, UiIconComponent],
	templateUrl: './ui-chip.component.html',
	styleUrl: './ui-chip.component.scss',
})
export class UiChipComponent {
	@Input() label = ''
	@Input() color:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'success'
		| 'warning'
		| 'danger' = 'primary'
}
