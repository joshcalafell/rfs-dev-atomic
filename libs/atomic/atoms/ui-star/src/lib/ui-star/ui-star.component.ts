import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'

@Component({
	selector: 'rfs-dev-atomic-ui-star',
	standalone: true,
	imports: [CommonModule, UiIconComponent],
	templateUrl: './ui-star.component.html',
	styleUrl: './ui-star.component.scss',
})
export class UiStarComponent {
	@Input() star!: { icon: string; size: string; color?: string | undefined }
}
