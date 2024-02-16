import type { Meta, StoryObj } from '@storybook/angular'
import { UiIconButtonComponent } from './ui-icon-button.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiIconButtonComponent> = {
	component: UiIconButtonComponent,
	title: 'UiIconButtonComponent',
}
export default meta
type Story = StoryObj<UiIconButtonComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-icon-button works!/gi)).toBeTruthy()
	},
}
