import type { Meta, StoryObj } from '@storybook/angular'
import { WishlistItemComponent } from './wishlist-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<WishlistItemComponent> = {
	component: WishlistItemComponent,
	title: 'WishlistItemComponent',
}
export default meta
type Story = StoryObj<WishlistItemComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/wishlist-item works!/gi)).toBeTruthy()
	},
}
