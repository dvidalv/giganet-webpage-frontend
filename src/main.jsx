import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Contacto from './components/Contacto/Contacto.jsx';
const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/contact', element: <Contacto /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
