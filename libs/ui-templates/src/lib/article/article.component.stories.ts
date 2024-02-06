import type { Meta, StoryObj } from '@storybook/angular'
import { ArticleComponent } from './article.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ArticleComponent> = {
	component: ArticleComponent,
	title: 'ArticleComponent',
}
export default meta
type Story = StoryObj<ArticleComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/article works!/gi)).toBeTruthy()
	},
}
