import type { Meta, StoryObj } from '@storybook/angular'
import { BtnTextComponent } from './btn-text.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<BtnTextComponent> = {
	component: BtnTextComponent,
	title: 'BtnTextComponent',
}
export default meta
type Story = StoryObj<BtnTextComponent>

export const Primary: Story = {
	args: {
		label: 'Label',
		type: 'button',
		disabled: false,
	},
}

export const Heading: Story = {
	args: {
		label: 'Label',
		type: 'button',
		disabled: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Label/gi)).toBeTruthy()
	},
}
