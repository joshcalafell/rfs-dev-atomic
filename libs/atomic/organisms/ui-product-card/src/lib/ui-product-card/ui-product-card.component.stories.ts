import type { Meta, StoryObj } from '@storybook/angular'
import { UiProductCardComponent } from './ui-product-card.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiProductCardComponent> = {
	component: UiProductCardComponent,
	title: 'UiProductCardComponent',
}
export default meta
type Story = StoryObj<UiProductCardComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/ui-product-card works!/gi)).toBeTruthy()
	},
}
