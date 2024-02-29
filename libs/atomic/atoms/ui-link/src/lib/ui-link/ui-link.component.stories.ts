import type { Meta, StoryObj } from '@storybook/angular'
import { UiLinkComponent } from './ui-link.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiLinkComponent> = {
	component: UiLinkComponent,
	title: 'UiLinkComponent',
}
export default meta
type Story = StoryObj<UiLinkComponent>

export const Primary: Story = {
	args: {
		link: {
			label: 'Primary',
			path: '/primary',
			target: '_blank',
			href: '/primary',
			rel: 'noopener noreferrer',
			download: 'primary',
			isActive: false,
			onClick: () => {
				console.log('Primary')
			},
		},
	},
}

export const Heading: Story = {
	args: {
		link: {
			label: 'Heading',
			path: '/heading',
			rel: 'noopener noreferrer',
			target: '_blank',
			href: '/heading',
			download: 'heading',
			isActive: false,
			onClick: () => {
				console.log('Heading')
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(await canvas.findByText('Heading')).toBeVisible()
	},
}

export const Cart: Story = {
	args: {
		link: {
			label: 'Cart',
			path: '/cart',
			rel: 'noopener noreferrer',
			target: '_blank',
			href: '/cart',
			download: 'cart',
			isActive: false,
			onClick: () => {
				console.log('Cart')
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
}

// Path: libs/atomic/atoms/ui-link/src/lib/ui-link/ui-link.component.ts
// Compare this snippet from libs/products/src/lib/products/products.component.spec.ts:
// // eslint-disable-next-line @nx/enforce-module-boundaries
// import { ProductsComponent } from './products.component'
//
// import { TestBed } from '@angular/core/testing'
// import { ProductsService } from '../service/products.service'
// import { RouterTestingModule } from '@angular/router/testing'
//
// describe('ProductsComponent', () => {
// 	let component: ProductsComponent
// 	let service: ProductsService
//
// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			imports: [RouterTestingModule],
// 			providers: [ProductsService],
// 		})
// 		component = TestBed.createComponent(ProductsComponent)
// 		service = TestBed.inject(ProductsService)
// 	})
//
// 	it('should create', () => {
// 		expect(component).toBeTruthy()
// 	})
