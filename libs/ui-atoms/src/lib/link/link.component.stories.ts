import type { Meta, StoryObj } from '@storybook/angular'
import { LinkComponent } from './link.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { ILink } from './link.model'

const meta: Meta<LinkComponent> = {
	component: LinkComponent,
	title: 'LinkComponent',
}
export default meta
type Story = StoryObj<LinkComponent>

export const Primary: Story = {
	args: {
		link: <ILink>{
			label: 'Home',
			path: '/',
			icon: '',
			alt: '',
			disabled: false,
			underline: false,
			color: 'primary',
			target: '_self',
			title: 'Home Link',
			rel: 'noopener noreferrer',
		},
	},
}

export const Heading: Story = {
	args: {
		link: <ILink>{
			label: 'Home',
			path: '/',
			icon: '',
			alt: '',
			disabled: false,
			underline: false,
			color: 'primary',
			target: '_self',
			title: 'Home Link',
			rel: 'noopener noreferrer',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Home/gi)).toBeTruthy()
	},
}
