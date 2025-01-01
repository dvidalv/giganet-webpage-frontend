import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import './index.css';
import Root from './components/Root/Root.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ index: true, element: <Main /> },
			{ path: 'contact', element: <Contacto /> },
		],
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
