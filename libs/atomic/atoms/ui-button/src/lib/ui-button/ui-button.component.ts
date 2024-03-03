import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

type TpalleteColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'warning'
	| 'success'
	| 'info'
	| 'light'
	| 'dark'
	| 'link'

type TButtonSize = 'small' | 'medium' | 'large'

export interface IAtomicUiButton {
	label: string
	palleteColor: TpalleteColor
	disabled: boolean
	size: 'small' | 'medium' | 'large'
}
@Component({
	selector: 'rfs-dev-atomic-ui-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-button.component.html',
	styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent implements IAtomicUiButton {
	@Output() clickEmitter: EventEmitter<MouseEvent> =
		new EventEmitter<MouseEvent>()

	@Input() label!: string
	@Input() palleteColor: TpalleteColor = 'primary'
	@Input() disabled = false
	@Input() size: TButtonSize = 'medium'
	@Input() type: 'button' | 'animated-arrow' = 'button'

	onClick(event: MouseEvent) {
		this.clickEmitter.emit(event)
	}
}
