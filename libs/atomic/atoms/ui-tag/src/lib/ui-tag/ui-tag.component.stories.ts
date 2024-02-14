import type { Meta, StoryObj } from '@storybook/angular'
import { UiTagComponent } from './ui-tag.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiTagComponent> = {
	component: UiTagComponent,
	title: 'UiTagComponent',
}
export default meta
type Story = StoryObj<UiTagComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-tag works!/gi)).toBeTruthy()
	},
}
