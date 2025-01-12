import { sendLoginFormData } from '../api/api';

export async function authActions({ request }) {
	try {
		const formData = await request.formData();
		const url = new URL(request.url);
		const mode = url.searchParams.get('mode');

		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
			confirmPassword: formData.get('confirmPassword'),
		};

		if (mode === 'register' && data.password !== data.confirmPassword) {
			return {
				message: 'Las contraseñas no coinciden',
				success: false,
			};
		}

		const response = await sendLoginFormData(data, mode);
		const responseData = await response.json();

		localStorage.setItem('token', responseData.data?.token);
		const currentDate = new Date();
		// console.log('Fecha actual:', currentDate.toISOString());

		const expirationDate = new Date();
		expirationDate.setHours(expirationDate.getHours() + 24);
		// console.log('Fecha de expiración:', expirationDate.toISOString());

		localStorage.setItem('expirationDate', expirationDate.toISOString());

		return {
			message:
				responseData.data?.message ||
				responseData?.message ||
				'Error de conexión',
			success: responseData.isSuccess || false,
			token: responseData.data?.token,
		};
	} catch (error) {
		return {
			message: 'Error de conexión',
			success: false,
		};
	}
}
