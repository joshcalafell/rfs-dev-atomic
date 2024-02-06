import type { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from './header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<HeaderComponent> = {
	component: HeaderComponent,
	title: 'HeaderComponent',
}
export default meta
type Story = StoryObj<HeaderComponent>

export const Primary: Story = {
	args: {
		menuItems: [],
		isLoggedIn: false,
	},
}

export const Heading: Story = {
	args: {
		menuItems: [],
		isLoggedIn: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/header works!/gi)).toBeTruthy()
	},
}
