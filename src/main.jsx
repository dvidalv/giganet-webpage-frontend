import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Main from './components/Main/Main.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import { MobileContextProvider } from './store/mobileContext.jsx';

 
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Main /> },
			{ path: 'contact', element: <Contacto /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MobileContextProvider>
			<RouterProvider router={router} />
		</MobileContextProvider>
	</React.StrictMode>
);
