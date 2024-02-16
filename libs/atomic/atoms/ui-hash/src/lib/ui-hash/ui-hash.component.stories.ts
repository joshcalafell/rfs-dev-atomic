import type { Meta, StoryObj } from '@storybook/angular'
import { UiHashComponent } from './ui-hash.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiHashComponent> = {
	component: UiHashComponent,
	title: 'UiHashComponent',
}
export default meta
type Story = StoryObj<UiHashComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-hash works!/gi)).toBeTruthy()
	},
}
