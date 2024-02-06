import type { Meta, StoryObj } from '@storybook/angular'
import { StarRankingComponent } from './star-ranking.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<StarRankingComponent> = {
	component: StarRankingComponent,
	title: 'StarRankingComponent',
}
export default meta
type Story = StoryObj<StarRankingComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/star-ranking works!/gi)).toBeTruthy()
	},
}
