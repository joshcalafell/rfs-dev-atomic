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
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-link works!/gi)).toBeTruthy()
	},
}
