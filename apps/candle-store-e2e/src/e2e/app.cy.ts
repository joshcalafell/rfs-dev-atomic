import { getGreeting } from '../support/app.po'

describe('candle-store-e2e', () => {
	beforeEach(() => cy.visit('/'))

	it('should display welcome message', () => {
		// Custom command example, see `../support/commands.ts` file
		cy.login('my-email@something.io', 'trustno1')

		// Function helper example, see `../support/app.po.ts` file
		getGreeting().contains('CANDLE STORE')
	})
})
