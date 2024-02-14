import type { Meta, StoryObj } from '@storybook/angular'
import { UiHeaderComponent } from './ui-header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiHeaderComponent> = {
	component: UiHeaderComponent,
	title: 'UiHeaderComponent',
}
export default meta
type Story = StoryObj<UiHeaderComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-header works!/gi)).toBeTruthy()
	},
}
