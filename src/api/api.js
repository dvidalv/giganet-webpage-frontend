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
