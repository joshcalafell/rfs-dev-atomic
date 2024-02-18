import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiHashComponent } from '@rfs-dev-atomic/ui-hash'

@Component({
	selector: 'rfs-dev-atomic-ui-hash-group',
	standalone: true,
	imports: [CommonModule, UiHashComponent],
	templateUrl: './ui-hash-group.component.html',
	styleUrl: './ui-hash-group.component.scss',
})
export class UiHashGroupComponent {
	@Input() hashes: string[] = []
}
