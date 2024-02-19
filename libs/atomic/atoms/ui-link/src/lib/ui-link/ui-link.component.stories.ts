import type { Meta, StoryObj } from '@storybook/angular'
import { UiLinkComponent } from './ui-link.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiLinkComponent> = {
	component: UiLinkComponent,
	title: 'UiLinkComponent',
}
export default meta
type Story = StoryObj<UiLinkComponent>

export const Primary: Story = {
	args: {
		link: {
			label: 'Primary',
			path: '/primary',
			target: '_blank',
			href: '/primary',
			rel: 'noopener noreferrer',
			download: 'primary',
			isActive: false,
			onClick: () => {
				console.log('Primary')
			},
		},
	},
}

export const Heading: Story = {
	args: {
		link: {
			label: 'Heading',
			path: '/heading',
			rel: 'noopener noreferrer',
			target: '_blank',
			href: '/heading',
			download: 'heading',
			isActive: false,
			onClick: () => {
				console.log('Heading')
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(await canvas.findByText('UiLinkComponent')).toBeVisible()
	},
}
