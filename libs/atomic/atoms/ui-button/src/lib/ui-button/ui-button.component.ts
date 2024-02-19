import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core'
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
	imports: [CommonModule, RouterModule],
	templateUrl: './ui-button.component.html',
	styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent implements IAtomicUiButton, OnInit, OnDestroy {
	@Output() clickEmitter: EventEmitter<void> = new EventEmitter()

	@Input() label!: string
	@Input() palleteColor: TpalleteColor = 'primary'
	@Input() disabled = false
	@Input() size: TButtonSize = 'medium'

	constructor() {
		console.log('UiButtonComponent')
	}

	ngOnInit() {
		console.log('UiButtonComponent')
	}

	ngOnDestroy() {
		console.log('UiButtonComponent')
	}

	onClick() {
		this.clickEmitter.emit()
		console.log('Button Text Component Clicked')
	}
}
