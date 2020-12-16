import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import useAppContext from './hooks/useAppContext';

import { Home } from './components';

const App = () => {
	const { getTodos, appState } = useAppContext();

	useEffect(() => getTodos(), []);

	return (
		<>
			{appState.loading ?
				<div>Loading...</div>
				: <div>
					Basic Setup:
					<Switch>
						<Route path='/' exact component={Home} />
					</Switch>
				</div>}
		</>
	);
};

export default App;
