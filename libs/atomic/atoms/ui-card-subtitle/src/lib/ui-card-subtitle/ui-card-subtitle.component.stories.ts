import type { Meta, StoryObj } from '@storybook/angular'
import { UiCardSubtitleComponent } from './ui-card-subtitle.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiCardSubtitleComponent> = {
	component: UiCardSubtitleComponent,
	title: 'UiCardSubtitleComponent',
}
export default meta
type Story = StoryObj<UiCardSubtitleComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-card-subtitle works!/gi)).toBeTruthy()
	},
}
