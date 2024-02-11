import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Event } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-btn-text',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './btn-text.component.html',
	styleUrl: './btn-text.component.scss',
})
export class BtnTextComponent {
	@Input()
	label = ''

	@Input()
	type = 'button'

	@Input()
	disabled = false

	@Output()
	clickEmitter: EventEmitter<void> = new EventEmitter()

	constructor() {
		console.log('Button Text Component Constructed')
	}

	onClickHandler() {
		console.log('Button Clicked')
		this.clickEmitter.emit()
	}
}
