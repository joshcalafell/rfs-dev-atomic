import type { Meta, StoryObj } from '@storybook/angular'
import { BtnIconComponent } from './btn-icon.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<BtnIconComponent> = {
	component: BtnIconComponent,
	title: 'BtnIconComponent',
}
export default meta
type Story = StoryObj<BtnIconComponent>

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
		expect(canvas.getByText(/btn-icon works!/gi)).toBeTruthy()
	},
}
