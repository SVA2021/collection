import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("App", () => {
	it('render App', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		screen.debug();
		expect(screen.getByText(/learn/i)).toBeInTheDocument();
		expect(screen.getByText(/asdhg/i)).toBeInTheDocument();
		userEvent.click(screen.getByRole('button'));
		screen.getByRole('textbox');
	})
})


// test('renders learn react link', () => {
// 	const { getByText } = render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	);

// 	expect(screen.getByText(/learn/i)).toBeInTheDocument();

// 	// render(<App/>);
// 	screen.debug();
// });
