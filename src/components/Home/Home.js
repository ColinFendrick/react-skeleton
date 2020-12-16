import useAppContext from '../../hooks/useAppContext';

const Home = () => {
	const { appState } = useAppContext();

	return (
		<div>
      React Skeleton
			<ul>
				{appState.todos.data?.map((el, i) => <li key={i}>{el.title}</li>)}
			</ul>
		</div>
	);
};

export default Home;
