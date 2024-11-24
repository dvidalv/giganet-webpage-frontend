let SERVER_URL = '';

if (window.location.hostname === 'localhost') {
	SERVER_URL = 'http://localhost:3001';
} else {
	SERVER_URL = 'https://giganet-backend.vercel.app/';
}

export const menuLinks = [
	{ to: 'hero', text: 'Inicio', submenu: false },
	{ to: 'servicios', text: 'Servicios', submenu: false },
	{ to: 'nosotros', text: 'Sobre Nosotros', submenu: false },
	{ to: 'clientes', text: 'Clientes', submenu: false },
	{ to: 'contact', text: 'Contacto', submenu: false },
];

// export const FILEMAKER_URL = 'https://www.server-lpcr.com.doo';
// export const FILEMAKER_DATABASE = 'lpcr';
// export const FILEMAKER_LAYOUT = 'pacientes_web';

export default SERVER_URL;
