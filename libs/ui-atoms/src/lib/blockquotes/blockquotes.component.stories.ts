import type { Meta, StoryObj } from '@storybook/angular'
import { BlockquotesComponent } from './blockquotes.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<BlockquotesComponent> = {
	component: BlockquotesComponent,
	title: 'BlockquotesComponent',
}
export default meta
type Story = StoryObj<BlockquotesComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/blockquotes works!/gi)).toBeTruthy()
	},
}
