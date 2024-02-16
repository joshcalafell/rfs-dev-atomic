import type { Meta, StoryObj } from '@storybook/angular'
import { UiHashGroupComponent } from './ui-hash-group.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiHashGroupComponent> = {
	component: UiHashGroupComponent,
	title: 'UiHashGroupComponent',
}
export default meta
type Story = StoryObj<UiHashGroupComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-hash-group works!/gi)).toBeTruthy()
	},
}
