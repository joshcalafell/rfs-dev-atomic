import {
	AfterContentChecked,
	AfterContentInit,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-btn-text',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './btn-text.component.html',
	styleUrl: './btn-text.component.scss',
})
export class BtnTextComponent
	implements
		OnInit,
		OnDestroy,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked
{
	@Input()
	text = ''

	@Input()
	type = 'button'

	@Input()
	disabled = false

	@Output()
	clickEmitter = new EventEmitter()

	constructor() {
		console.log('Button Text Component Constructed')
	}

	ngOnInit() {
		console.log('Button Text Component')
	}

	ngOnDestroy() {
		console.log('Button Text Component Destroyed')
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('Button Text Component Changes', changes)
	}

	ngDoCheck() {
		console.log('Button Text Component Do Check')
	}

	ngAfterContentInit() {
		console.log('Button Text Component After Content Init')
	}

	ngAfterContentChecked() {
		console.log('Button Text Component After Content Checked')
	}

	onClickHandler() {
		this.clickEmitter.emit()
		console.log('Button Text Component Clicked')
	}
}
