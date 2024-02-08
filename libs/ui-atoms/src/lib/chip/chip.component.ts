import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	EChipIconType,
	EChipSize,
	EChipThemeColor,
	EIconColor,
	EIconPosition,
	EIconTooltipPosition,
} from './chip.enum'
@Component({
	selector: 'rfs-dev-atomic-chip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chip.component.html',
	styleUrl: './chip.component.scss',
})
export class ChipComponent {
	@Input() label!: string
	@Input() color!: EChipThemeColor
	@Input() size!: EChipSize
	@Input() icon?: EChipIconType
	@Input() iconPosition?: EIconPosition
	@Input() iconColor?: EIconColor
	@Input() iconTooltipPosition?: EIconTooltipPosition
	@Input() iconTooltip?: string
	@Input() iconTooltipDisabled?: boolean
}
