import { UiIconComponent } from '@rfs-dev-atomic/ui-icon'
import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	ActivatedRoute,
	NavigationEnd,
	Router,
	RouterModule,
} from '@angular/router'

type IAtomicLinkPaletteColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

type IAtomicLinkSize = 'small' | 'medium' | 'large'
export interface IAtomicLink {
	label: string
	path?: string
	disabled?: boolean
	size?: IAtomicLinkSize
	palleteColor?: IAtomicLinkPaletteColor
	target?: string
	href?: string
	download?: string
	isActive?: boolean
	color?: string
	rel?: string
	onClick?: () => void
}

@Component({
	selector: 'rfs-dev-atomic-ui-link',
	standalone: true,
	imports: [CommonModule, RouterModule, UiIconComponent],
	templateUrl: './ui-link.component.html',
	styleUrl: './ui-link.component.scss',
})
export class UiLinkComponent implements OnInit {
	@Input() link: IAtomicLink = {
		label: 'Label',
		path: '',
		target: '_blank',
		href: '',
		color: 'black',
		download: '',
		isActive: false,
		rel: 'noopener noreferrer',
		onClick: () => {
			console.log('Link clicked')
		},
	}

	private _isActive = false

	public get isActive() {
		return this._isActive
	}

	public set isActive(value) {
		this._isActive = value
	}

	constructor(private router: Router, private route: ActivatedRoute) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.isActive = event.url === this.link.path
			}
		})
	}

	ngOnInit() {
		this.isActive = this.router.url === this.link.path
	}

	onClick() {
		// this.link.onClick()
	}
}
