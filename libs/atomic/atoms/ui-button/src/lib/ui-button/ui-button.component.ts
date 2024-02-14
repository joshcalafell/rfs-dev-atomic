import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'

type TPalletteColor =
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

interface IAtomicUiButton {
	label: string
	palletColor: TPalletteColor
	disabled: boolean
	size: 'small' | 'medium' | 'large'
	path: string
	// 👈🏽 new property
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
	@Input() palletColor: TPalletteColor = 'primary'
	@Input() disabled = false
	@Input() size: TButtonSize = 'medium'
	@Input() path = ''

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
