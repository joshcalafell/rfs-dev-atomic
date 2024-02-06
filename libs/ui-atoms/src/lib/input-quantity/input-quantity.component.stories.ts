import type { Meta, StoryObj } from '@storybook/angular'
import { InputQuantityComponent } from './input-quantity.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<InputQuantityComponent> = {
	component: InputQuantityComponent,
	title: 'InputQuantityComponent',
}
export default meta
type Story = StoryObj<InputQuantityComponent>

export const Primary: Story = {
	args: {
		value: 1,
	},
}

export const Heading: Story = {
	args: {
		value: 1,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.findAllByRole('spinbutton')).toBeTruthy()
	},
}
