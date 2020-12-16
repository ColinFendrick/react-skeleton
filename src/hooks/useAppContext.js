import { useContext } from 'react';

import AppService from '../services/AppService';
import { AppContext } from '../context/AppContext';

const useAppContext = () => {
	const [appState, setAppState] = useContext(AppContext);

	const getTodos = async (page = '') => {
		try {
			const res = await AppService.get(page);
			setAppState({ todos: res, error: false });
		} catch (e) {
			setAppState({ todos: [], error: true });
		}
	};

	return {
		getTodos,
		appState,
		setAppState
	};
};

export default useAppContext;
