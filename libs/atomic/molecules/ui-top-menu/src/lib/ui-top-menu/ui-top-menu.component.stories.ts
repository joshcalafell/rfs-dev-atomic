import type { Meta, StoryObj } from '@storybook/angular'
import { UiTopMenuComponent } from './ui-top-menu.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiTopMenuComponent> = {
	component: UiTopMenuComponent,
	title: 'UiTopMenuComponent',
}
export default meta
type Story = StoryObj<UiTopMenuComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-top-menu works!/gi)).toBeTruthy()
	},
}
