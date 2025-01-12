let SERVER_URL = '';

if (window.location.hostname === 'localhost') {
	SERVER_URL = 'http://localhost:3000';
} else {
	SERVER_URL = 'https://giganet-backend.vercel.app';
	
}


export default SERVER_URL;
