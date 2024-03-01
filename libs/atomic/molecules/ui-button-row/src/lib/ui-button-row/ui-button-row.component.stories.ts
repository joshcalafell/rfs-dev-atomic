import type { Meta, StoryObj } from '@storybook/angular'
import { UiButtonRowComponent } from './ui-button-row.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<UiButtonRowComponent> = {
	component: UiButtonRowComponent,
	title: 'UiButtonRowComponent',
}
export default meta
type Story = StoryObj<UiButtonRowComponent>

export const Primary: Story = {
	args: {
		buttons: [
			{
				label: 'Button 1',
				color: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 2',
				color: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 3',
				color: 'tertiary',
				size: 'medium',
				disabled: false,
			},
		],
	},
}

export const Small: Story = {
	args: {
		buttons: [
			{
				label: 'Button 1',
				color: 'primary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				color: 'secondary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				color: 'tertiary',
				size: 'small',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 7/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}

export const Medium: Story = {
	args: {
		buttons: [
			{
				label: 'Button 4',
				color: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 5',
				color: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 6',
				color: 'tertiary',
				size: 'medium',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 6/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}

export const Large: Story = {
	args: {
		buttons: [
			{
				label: 'Button 7',
				color: 'primary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 8',
				color: 'secondary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 9',
				color: 'tertiary',
				size: 'large',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 9/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}
