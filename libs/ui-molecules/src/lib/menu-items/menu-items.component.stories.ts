import type { Meta, StoryObj } from '@storybook/angular'
import { MenuItemsComponent } from './menu-items.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<MenuItemsComponent> = {
	component: MenuItemsComponent,
	title: 'MenuItemsComponent',
}
export default meta
type Story = StoryObj<MenuItemsComponent>

export const Primary: Story = {
	args: {
		menuItems: [],
	},
}

export const Heading: Story = {
	args: {
		menuItems: [],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/menu-items works!/gi)).toBeTruthy()
	},
}
