import type { Meta, StoryObj } from '@storybook/angular'
import { BottomSheetComponent } from './bottom-sheet.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<BottomSheetComponent> = {
	component: BottomSheetComponent,
	title: 'BottomSheetComponent',
}
export default meta
type Story = StoryObj<BottomSheetComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/bottom-sheet works!/gi)).toBeTruthy()
	},
}
