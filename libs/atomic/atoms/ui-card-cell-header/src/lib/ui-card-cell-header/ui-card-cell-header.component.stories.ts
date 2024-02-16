import type { Meta, StoryObj } from '@storybook/angular'
import { UiCardCellHeaderComponent } from './ui-card-cell-header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiCardCellHeaderComponent> = {
	component: UiCardCellHeaderComponent,
	title: 'UiCardCellHeaderComponent',
}
export default meta
type Story = StoryObj<UiCardCellHeaderComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-card-cell-header works!/gi)).toBeTruthy()
	},
}
