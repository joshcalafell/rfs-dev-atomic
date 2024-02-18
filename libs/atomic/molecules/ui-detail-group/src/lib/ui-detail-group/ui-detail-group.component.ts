import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiDetailItemComponent } from '@rfs-dev-atomic/ui-detail-item'

@Component({
	selector: 'rfs-dev-atomic-ui-detail-group',
	standalone: true,
	imports: [CommonModule, UiDetailItemComponent],
	templateUrl: './ui-detail-group.component.html',
	styleUrl: './ui-detail-group.component.scss',
})
export class UiDetailGroupComponent {
	@Input() items: { label: string; value: string | number }[] = []
}
