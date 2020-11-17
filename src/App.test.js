import { screen } from '@testing-library/react';

import { setup, renderWith, withRouter } from './setupTests';

import App from './App';

describe('Testing <App />', () => {
	setup(beforeAll)(
		() => renderWith(withRouter)(<App />)
	);

	test('Shows the loading screen and nothing else', () => {
		expect(
			screen.getByText('Basic Setup:')
		).toBeInTheDocument();
	});
});
