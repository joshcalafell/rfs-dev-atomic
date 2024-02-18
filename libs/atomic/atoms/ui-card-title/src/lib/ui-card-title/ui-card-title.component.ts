import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-ui-card-title',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-card-title.component.html',
	styleUrl: './ui-card-title.component.scss',
})
export class UiCardTitleComponent {
	@Input() title!: string
}
