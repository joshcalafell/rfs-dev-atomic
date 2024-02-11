type ILinkColor = 'primary' | 'secondary' | 'tertiary'

export interface ILink {
	label: string
	path: string
	icon: string
	alt: string
	disabled: boolean
	underline: boolean
	color?: ILinkColor | string
	target: string
	title: string
	rel: string
}
