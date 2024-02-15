import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ILink } from './link.model'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-dev-atomic-link',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
})
export class LinkComponent implements OnInit, OnChanges {
	@Input() link: ILink = {
		label: 'Label',
		path: '',
		icon: '',
		alt: 'link',
		disabled: false,
		underline: false,
		color: 'primary',
		target: '_blank',
		title: '',
		rel: 'noopener noreferrer',
	} as ILink

	isActive = false

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnChanges() {
		console.log(this.link)
	}

	ngOnInit() {
		console.log(this.link)
	}
}
