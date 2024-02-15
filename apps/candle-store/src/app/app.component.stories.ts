import type { Meta, StoryObj } from '@storybook/angular'
import { AppComponent } from './app.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<AppComponent> = {
	component: AppComponent,
	title: 'AppComponent',
}
export default meta
type Story = StoryObj<AppComponent>

export const Primary: Story = {
	args: {
		title: 'Candle Store',
		user: { name: 'Hal Doe', email: '' },
		links: [
			{ label: 'Home', path: '/' },
			{ label: 'Products', path: '/products' },
			{ label: 'Cart', path: '/cart' },
		],
	},
}

export const Heading: Story = {
	args: {
		title: 'Candle Store',
		user: { name: 'Hal Doe', email: '' },
		links: [
			{ label: 'Home', path: '/' },
			{ label: 'Products', path: '/products' },
			{ label: 'Cart', path: '/cart' },
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Candle Store/gi)).toBeTruthy()
	},
}
