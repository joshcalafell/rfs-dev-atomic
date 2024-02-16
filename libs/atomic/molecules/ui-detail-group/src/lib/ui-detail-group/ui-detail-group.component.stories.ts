import type { Meta, StoryObj } from '@storybook/angular'
import { UiDetailGroupComponent } from './ui-detail-group.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiDetailGroupComponent> = {
	component: UiDetailGroupComponent,
	title: 'UiDetailGroupComponent',
}
export default meta
type Story = StoryObj<UiDetailGroupComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-detail-group works!/gi)).toBeTruthy()
	},
}
