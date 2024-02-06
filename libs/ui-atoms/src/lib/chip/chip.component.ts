import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-chip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chip.component.html',
	styleUrl: './chip.component.scss',
})
export class ChipComponent {
	@Input() label = 'Chip'
}
