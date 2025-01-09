import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import './index.css';
import Root from './components/Root/Root.jsx';
import { contactAction } from './actions/contactActions.js';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: 'contact',
				element: <Contacto />,
				action: contactAction,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
