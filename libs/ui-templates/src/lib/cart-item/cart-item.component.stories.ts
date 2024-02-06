import type { Meta, StoryObj } from '@storybook/angular'
import { CartItemComponent } from './cart-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<CartItemComponent> = {
	component: CartItemComponent,
	title: 'CartItemComponent',
}
export default meta
type Story = StoryObj<CartItemComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/cart-item works!/gi)).toBeTruthy()
	},
}
