import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	ActivatedRoute,
	Router,
	RouterLink,
	RouterLinkActive,
	RouterModule,
} from '@angular/router'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ILink } from 'libs/ui-atoms/src/lib/link/link.model'

@Component({
	selector: 'rfs-dev-atomic-ui-link',
	standalone: true,
	imports: [CommonModule, UiLinkComponent, RouterModule],
	templateUrl: './ui-link.component.html',
	styleUrl: './ui-link.component.scss',
})
export class UiLinkComponent implements OnInit, OnChanges {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() link? = { label: '', path: '' } as any

	isActive = false

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnChanges() {
		console.log(this.link)
	}

	ngOnInit() {
		console.log(this.link)
	}
}
