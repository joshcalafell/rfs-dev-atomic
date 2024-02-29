import type { Meta, StoryObj } from '@storybook/angular'
import { ProductsComponent } from './products.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import * as mockData from '../service/products.mock-data'
const meta: Meta<ProductsComponent> = {
	component: ProductsComponent,
	title: 'ProductsComponent',
}
export default meta
type Story = StoryObj<ProductsComponent>

export const Primary: Story = {
	args: {
		products: mockData.default,
	},
}

export const Heading: Story = {
	args: {
		products: mockData.default,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Candle Store!/gi)).toBeTruthy()
	},
}

export const Cart: Story = {
	args: {
		products: mockData.default,
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
}
