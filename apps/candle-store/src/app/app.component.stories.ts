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
		isLoggedIn: false,
		menuItems: [
			{
				label: 'About',
				path: '/about',
				target: '_self',
				rel: '',
				title: 'About Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Products',
				path: '/products',
				target: '_self',
				rel: '',
				title: 'Products Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Contact',
				path: '/contact',
				target: '_self',
				rel: '',
				title: 'Contact Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Cart',
				path: '/cart',
				target: '_self',
				rel: '',
				title: 'Cart Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
		],
	},
}

export const Heading: Story = {
	args: {
		title: 'Candle Store',
		isLoggedIn: false,
		menuItems: [
			{
				label: 'About',
				path: '/about',
				target: '_self',
				rel: '',
				title: 'About Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Products',
				path: '/products',
				target: '_self',
				rel: '',
				title: 'Products Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Contact',
				path: '/contact',
				target: '_self',
				rel: '',
				title: 'Contact Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
			{
				label: 'Cart',
				path: '/cart',
				target: '_self',
				rel: '',
				title: 'Cart Link',
				color: 'primary',
				disabled: false,
				underline: false,
				icon: '',
				alt: '',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Candle Store/gi)).toBeTruthy()
	},
}
