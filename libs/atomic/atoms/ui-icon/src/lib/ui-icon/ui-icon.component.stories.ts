import type { Meta, StoryObj } from '@storybook/angular'
import { UiIconComponent } from './ui-icon.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiIconComponent> = {
	component: UiIconComponent,
	title: 'UiIconComponent',
}
export default meta
type Story = StoryObj<UiIconComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/💥/gi)).toBeTruthy()
	},
}
