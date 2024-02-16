import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'
type IChipVariant = 'price' | 'date' | 'lqbel' | 'status' | 'default'
export interface IChip {
	label: string
	color: 'primary' | 'secondary' | 'tertiary'
	icon?: string
	removable?: boolean
	disabled?: boolean
	selected?: boolean
	outlined?: boolean
	rounded?: boolean
	variant?: IChipVariant
}

@Component({
	selector: 'rfs-dev-atomic-ui-chip',
	standalone: true,
	imports: [CommonModule, UiIconComponent],
	templateUrl: './ui-chip.component.html',
	styleUrl: './ui-chip.component.scss',
})
export class UiChipComponent {
	@Output() remove = new EventEmitter<void>()
	@Input() label!: string
	@Input() color!: 'primary' | 'secondary' | 'tertiary'
	@Input() icon?: string = ''
	@Input() removable?: boolean = false
	@Input() disabled?: boolean = false
	@Input() selected?: boolean = false
	@Input() outlined?: boolean = true
	@Input() rounded?: boolean = true
	@Input() closable?: boolean = false
	@Input() variant?: IChipVariant = 'default'
}
