import type { Meta, StoryObj } from '@storybook/angular'
import { UiCardCellDataComponent } from './ui-card-cell-data.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiCardCellDataComponent> = {
	component: UiCardCellDataComponent,
	title: 'UiCardCellDataComponent',
}
export default meta
type Story = StoryObj<UiCardCellDataComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-card-cell-data works!/gi)).toBeTruthy()
	},
}
