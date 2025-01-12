import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import './index.css';
import Root from './components/Root/Root.jsx';
import { contactAction } from './actions/contactActions.js';
import Login from './components/Login/Login.jsx';
import { authActions } from './actions/authActions.js';
import { logoutAction } from './actions/logoutAction.js';
import { tokenLoader } from './utils/auth.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		loader: tokenLoader,
		id: 'root',
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
				path: 'auth',
				element: <Login />,
				action: authActions,
			},
			{
				path: 'logout',
				action: logoutAction,
			},
			{
        future: {
					v7_fetcherPersist: true,
				},
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
