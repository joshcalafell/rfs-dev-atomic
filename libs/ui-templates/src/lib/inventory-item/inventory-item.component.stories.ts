import type { Meta, StoryObj } from '@storybook/angular'
import { InventoryItemComponent } from './inventory-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<InventoryItemComponent> = {
	component: InventoryItemComponent,
	title: 'InventoryItemComponent',
}
export default meta
type Story = StoryObj<InventoryItemComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/inventory-item works!/gi)).toBeTruthy()
	},
}
