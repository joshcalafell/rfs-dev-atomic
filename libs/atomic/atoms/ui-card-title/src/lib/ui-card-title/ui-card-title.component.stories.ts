import type { Meta, StoryObj } from '@storybook/angular'
import { UiCardTitleComponent } from './ui-card-title.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiCardTitleComponent> = {
	component: UiCardTitleComponent,
	title: 'UiCardTitleComponent',
}
export default meta
type Story = StoryObj<UiCardTitleComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-card-title works!/gi)).toBeTruthy()
	},
}
