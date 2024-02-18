import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonComponent } from '@rfs-dev-atomic/ui-button'

@Component({
	selector: 'rfs-dev-atomic-ui-button-row',
	standalone: true,
	imports: [CommonModule, UiButtonComponent],
	templateUrl: './ui-button-row.component.html',
	styleUrl: './ui-button-row.component.scss',
})
export class UiButtonRowComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() buttons: any[] = []
	// eslint-disable-next-line @typescript-eslint/no-explicit-any

	constructor() {
		console.log('UiButtonRowComponent')
	}

	ngOnInit() {
		console.log('UiButtonRowComponent')
	}
}
