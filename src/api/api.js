import SERVER_URL from '../utils/constants';


export async function sendContactFormData(data) {
	const url = `${SERVER_URL}/api/form-contact`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		console.log('Estado de la respuesta:', response.status);

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error('Error en la petición:', error);
		throw error;
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
