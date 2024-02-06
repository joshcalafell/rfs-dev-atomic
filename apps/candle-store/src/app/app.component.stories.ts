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
		image_src: 'https://i.postimg.cc/pLyyV7S8/candles-set-one.jpg',
	},
}

export const Heading: Story = {
	args: {
		title: 'Candle Store',
		image_src: 'https://i.postimg.cc/pLyyV7S8/candles-set-one.jpg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Candle Store/gi)).toBeTruthy()
	},
}
