import type { Meta, StoryObj } from '@storybook/angular'
import { UiButtonRowComponent } from './ui-button-row.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiButtonRowComponent> = {
	component: UiButtonRowComponent,
	title: 'UiButtonRowComponent',
}
export default meta
type Story = StoryObj<UiButtonRowComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-button-row works!/gi)).toBeTruthy()
	},
}
