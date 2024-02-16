import type { Meta, StoryObj } from '@storybook/angular'
import { UiStarComponent } from './ui-star.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiStarComponent> = {
	component: UiStarComponent,
	title: 'UiStarComponent',
}
export default meta
type Story = StoryObj<UiStarComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-star works!/gi)).toBeTruthy()
	},
}
