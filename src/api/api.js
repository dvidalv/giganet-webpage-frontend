export async function sendContactFormData(data) {
	try {
		console.log('Enviando datos:', data);

		const response = await fetch('http://localhost:3001/api/form-contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		console.log('Estado de la respuesta:', response.status);

		const responseData = await response.json();
		console.log('Respuesta del servidor:', responseData);
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
		console.log('Ciudad:', city);
		
	} catch (error) {
		console.log(error.message);
		setLocationStatus('Error al obtener la ubicación');
	}
};
