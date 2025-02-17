import SERVER_URL from '../utils/constants';

export async function sendLoginFormData(data, endpoint) {
	const url = `${SERVER_URL}/api/users/${endpoint}`;
	console.log('Enviando petición a:', url);
	console.log('Origen actual:', window.location.origin);

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Origin: window.location.origin,
			},
			credentials: 'include',
			mode: 'cors',
			body: JSON.stringify(data),
		});

		// Loguear las cabeceras de la respuesta
		console.log('Status:', response.status);
		console.log('Headers:', {
			'access-control-allow-origin': response.headers.get(
				'access-control-allow-origin'
			),
			'access-control-allow-credentials': response.headers.get(
				'access-control-allow-credentials'
			),
		});

		return response;
	} catch (error) {
		console.error('Error detallado:', error);
		throw error;
	}
}

export async function sendContactFormData(data) {
	const url = `${SERVER_URL}/api/form-contact`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Agregar headers adicionales para autenticación si es necesario
			},
			body: JSON.stringify({
				...data,
				// Agregar metadatos adicionales
				source: window.location.hostname, // Nombre del dominio
				timestamp: new Date().toISOString(), // Fecha y hora actual
				userAgent: navigator.userAgent, // Información del navegador
			}),
		});

		if (!response.ok) {
			return {
				success: false,
				message: 'Error en el servidor',
				status: response.status,
			};
		}

		const responseData = await response.json();
		return {
			success: true,
			data: responseData,
		};
	} catch (error) {
		console.error('Error en la petición:', error);
		return {
			success: false,
			message: 'El servidor no está disponible',
			error: error.message,
		};
	}
}

export const getLocation = async (setLocationStatus) => {
	try {
		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
		const { latitude, longitude } = position.coords;

		// Obtener el nombre de la ciudad usando Nominatim
		const response = await fetch(
			`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
		);
		const data = await response.json();
		const city = data.address.city || data.address.town || data.address.village;

		setLocationStatus(`Ubicación: ${city}`);
	} catch (error) {
		console.log(error.message);
		setLocationStatus('Error al obtener la ubicación');
	}
};
